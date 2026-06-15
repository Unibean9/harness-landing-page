import type { SddPrinciple } from "@/lib/sdd-data";

interface SddArticleProps {
  principle: SddPrinciple;
}

export function SddArticle({ principle }: SddArticleProps) {
  return (
    <article aria-labelledby="sdd-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý {String(principle.id).padStart(2, "0")}</p>
        <h1 id="sdd-title" className="principles-doc-title">
          {principle.title}
        </h1>

        <p id="sdd-quote" className="principles-section-quote">
          &ldquo;{principle.quote}&rdquo;
        </p>
      </header>

      <div id="sdd-body" className="principles-prose">
        {principle.body.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
