const PROSE_LINE =
  /^[A-Z][a-z].*(?:\.|:)\s*$|^[A-Z][a-z].+\s—\s|^[A-Z][a-z].+:\s*$/;

const CODE_LINE =
  /^\s*(\/\/|@\w+|public |private |protected |static |import |package |class |interface |return |for |if |while |throw |void |int |long |double |boolean )|^(List|Map|Set|Optional|String|Integer|Double|Long)\b|[;{}]\s*$|;\s*\/\/|\w+\([^)]*\)\s*;|^\s*\w[\w.]*\s*=\s*[^=]/;

export type DocBodyBlock =
  | { type: "prose"; content: string }
  | { type: "code"; content: string };

function isCodeLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;

  if (/^\s*-\s+/.test(trimmed) && !/;\s*$/.test(trimmed)) {
    return false;
  }

  if (/\b(is a|are a|either:|when to|forces you|called it)\b/i.test(trimmed) && !trimmed.endsWith(";")) {
    return false;
  }

  if (PROSE_LINE.test(trimmed) && !trimmed.includes("//") && !trimmed.includes(";")) {
    return false;
  }

  return CODE_LINE.test(trimmed);
}

function isCodeParagraph(text: string): boolean {
  const lines = text.split("\n").filter((line) => line.trim());
  if (lines.length === 0) return false;

  const codeLines = lines.filter(isCodeLine);
  return codeLines.length > 0 && codeLines.length >= Math.ceil(lines.length / 2);
}

/** Split section body into alternating prose and code blocks. */
export function parseDocBody(body: string): DocBodyBlock[] {
  const paragraphs = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const blocks: DocBodyBlock[] = [];

  for (const paragraph of paragraphs) {
    const type = isCodeParagraph(paragraph) ? "code" : "prose";
    const last = blocks[blocks.length - 1];

    if (last && last.type === type) {
      last.content += `\n\n${paragraph}`;
    } else {
      blocks.push({ type, content: paragraph });
    }
  }

  return blocks;
}
