import { parseDocBody } from "./parse-body";

const KEYWORDS =
  /\b(public|private|protected|static|final|return|new|class|interface|extends|implements|void|int|long|double|boolean|String|List|Map|Set|Optional|var|import|package|for|if|else|true|false|null)\b/g;

const NOT_TYPES = new Set([
  "Before",
  "After",
  "When",
  "The",
  "This",
  "That",
  "Tony",
  "Use",
  "Never",
  "Almost",
  "Examples",
  "Practical",
  "Producer",
  "Consumer",
  "Step",
  "Old",
  "Lambda",
  "Streams",
]);

const STRING_REGEX = /("(?:[^"\\]|\\.)*")/g;

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function stringPlaceholder(index: number): string {
  return `\x00S${index}\x00`;
}

/** Pull string literals out first so later passes never touch span markup or attribute quotes. */
function extractStrings(line: string): { text: string; strings: string[] } {
  const strings: string[] = [];
  const text = line.replace(STRING_REGEX, (match) => {
    strings.push(match);
    return stringPlaceholder(strings.length - 1);
  });
  return { text, strings };
}

function restoreStrings(html: string, strings: string[]): string {
  return html.replace(/\x00S(\d+)\x00/g, (_, index) => {
    const literal = strings[Number(index)];
    return `<span class="code-string">${escapeHtml(literal)}</span>`;
  });
}

function applyCodeTokens(line: string): string {
  const { text, strings } = extractStrings(line);

  let html = escapeHtml(text);
  html = html.replace(KEYWORDS, '<span class="code-keyword">$1</span>');
  html = html.replace(/(@\w+)/g, '<span class="code-annotation">$1</span>');
  html = html.replace(/&lt;([A-Z])&gt;/g, '&lt;<span class="code-type">$1</span>&gt;');
  html = html.replace(/\b([A-Z][a-zA-Z0-9]{2,})\b/g, (match) =>
    NOT_TYPES.has(match) ? match : `<span class="code-type">${match}</span>`,
  );

  return restoreStrings(html, strings);
}

function highlightCodeLine(line: string): string {
  if (/^\s*\/\//.test(line)) {
    return `<span class="code-comment">${escapeHtml(line)}</span>`;
  }

  const commentIndex = line.indexOf("//");
  if (commentIndex > 0) {
    const codePart = line.slice(0, commentIndex);
    const commentPart = line.slice(commentIndex);
    return `${applyCodeTokens(codePart)}<span class="code-comment">${escapeHtml(commentPart)}</span>`;
  }

  return applyCodeTokens(line);
}

export function highlightJava(code: string): string {
  return code.split("\n").map(highlightCodeLine).join("\n");
}

export function isCodeSection(body: string): boolean {
  return parseDocBody(body).some((block) => block.type === "code");
}
