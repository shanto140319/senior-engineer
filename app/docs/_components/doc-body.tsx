import { parseDocBody } from "@/lib/docs/parse-body";
import { CodeBlock } from "./code-block";

interface DocBodyProps {
  body: string;
}

export function DocBody({ body }: DocBodyProps) {
  const blocks = parseDocBody(body);

  return (
    <div className="flex flex-col gap-3">
      {blocks.map((block, index) =>
        block.type === "code" ? (
          <CodeBlock key={index} code={block.content} />
        ) : (
          <div
            key={index}
            className="rounded-[10px] border border-slate-700 bg-slate-900 px-4 py-3.5 text-[13.5px] leading-relaxed whitespace-pre-wrap text-roadmap-subtle"
          >
            {block.content}
          </div>
        ),
      )}
    </div>
  );
}
