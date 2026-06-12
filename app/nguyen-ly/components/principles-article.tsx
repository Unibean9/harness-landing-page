import type { Principle } from "@/lib/principles-data";
import { cn } from "@/lib/utils/cn";

interface PrinciplesArticleProps {
  principle: Principle;
}

export function PrinciplesArticle({ principle }: PrinciplesArticleProps) {
  return (
    <article aria-labelledby="principle-title" data-principles-item>
      <header className="principles-doc-header">
        <h1 id="principle-title" className="principles-doc-title">
          {String(principle.id).padStart(2, "0")}. {principle.title}
        </h1>

        <p id="principle-quote" className="principles-section-quote">
          &ldquo;{principle.quote}&rdquo;
        </p>
      </header>

      <div id="principle-body" className="principles-prose">
        {principle.body.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      {principle.callout && (
        <aside
          id="principle-callout"
          className={cn("principles-callout", `principles-callout--${principle.callout.variant}`)}
        >
          <p className="principles-callout-title">{principle.callout.title}</p>
          {principle.callout.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="principles-callout-copy">
              {paragraph}
            </p>
          ))}
        </aside>
      )}
    </article>
  );
}
