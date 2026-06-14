type PrincipleEquationSide = {
  term: string;
  def: string;
};

type PrincipleIntroQuestions = {
  wrong: string;
  right: string;
  wrongLabel?: string;
  rightLabel?: string;
};

type PrincipleIntroVariant = "editorial" | "question" | "definition" | "prose";

type PrincipleIntroProps = {
  principleNumber: number;
  simple: string;
  note: string;
  variant?: PrincipleIntroVariant;
  term?: string;
  questions?: PrincipleIntroQuestions;
  equation?: readonly PrincipleEquationSide[];
  includeNote?: boolean;
};

function stripDefinitionPrefix(simple: string, term?: string) {
  if (term) {
    const prefix = `${term} nghĩa là:`;
    if (simple.startsWith(prefix)) {
      return simple.slice(prefix.length).trim();
    }
  }

  const genericPrefix = simple.match(/^(.+?) nghĩa là:\s*/);
  if (genericPrefix) {
    return simple.slice(genericPrefix[0].length).trim();
  }

  return simple;
}

function IntroEquation({ equation }: { equation: readonly PrincipleEquationSide[] }) {
  return (
    <div className="p-bookend-equation">
      {equation.map((side) => (
        <div key={side.term} className="p-bookend-equation-side">
          <p className="p-bookend-equation-term">{side.term}</p>
          <p className="p-bookend-equation-def">{side.def}</p>
        </div>
      ))}
    </div>
  );
}

function IntroLabel() {
  return <p className="p-bookend-label">Hiểu đơn giản</p>;
}

function IntroQuestion({
  simple,
  note,
  questions,
  equation,
  includeNote,
}: Pick<PrincipleIntroProps, "simple" | "note" | "questions" | "equation" | "includeNote">) {
  if (!questions) {
    return null;
  }

  return (
    <div className="p-bookend p-bookend--intro p-bookend--intro-question">
      <IntroLabel />

      <div className="p-bookend-question-stack">
        <div className="p-bookend-question p-bookend-question--wrong">
          <p className="p-bookend-question-label">{questions.wrongLabel ?? "Câu hỏi thường gặp"}</p>
          <p className="p-bookend-question-text">&ldquo;{questions.wrong}&rdquo;</p>
        </div>

        <span className="p-bookend-question-bridge" aria-hidden="true">
          ↓
        </span>

        <div className="p-bookend-question p-bookend-question--right">
          <p className="p-bookend-question-label">{questions.rightLabel ?? "Nên hỏi trước"}</p>
          <p className="p-bookend-question-text">&ldquo;{questions.right}&rdquo;</p>
        </div>
      </div>

      <p className="p-bookend-lead p-bookend-lead--answer">{simple}</p>

      {includeNote ? <p className="p-bookend-prose-note">{note}</p> : null}

      {equation && equation.length > 0 ? <IntroEquation equation={equation} /> : null}
    </div>
  );
}

function IntroDefinition({
  simple,
  note,
  term,
  equation,
}: Pick<PrincipleIntroProps, "simple" | "note" | "term" | "equation">) {
  const definition = stripDefinitionPrefix(simple, term);

  return (
    <div className="p-bookend p-bookend--intro p-bookend--intro-definition">
      <IntroLabel />

      <div className="p-bookend-definition">
        <p className="p-bookend-definition-term">{term}</p>
        <p className="p-bookend-definition-body">{definition}</p>
      </div>

      {equation && equation.length > 0 ? <IntroEquation equation={equation} /> : null}

      <p className="p-bookend-prose-note">{note}</p>
    </div>
  );
}

function IntroProse({ simple, note }: Pick<PrincipleIntroProps, "simple" | "note">) {
  return (
    <div className="p-bookend p-bookend--intro p-bookend--intro-prose">
      <IntroLabel />
      <p className="p-bookend-prose-lead">{simple}</p>
      <p className="p-bookend-prose-note">{note}</p>
    </div>
  );
}

function IntroEditorial({
  principleNumber,
  simple,
  note,
  equation,
}: Pick<PrincipleIntroProps, "principleNumber" | "simple" | "note" | "equation">) {
  return (
    <div className="p-bookend p-bookend--intro p-bookend--intro-editorial">
      <div className="p-bookend-rail" aria-hidden="true">
        <span className="p-bookend-index">{String(principleNumber).padStart(2, "0")}</span>
      </div>

      <div className="p-bookend-body">
        <IntroLabel />
        <p className="p-bookend-lead">{simple}</p>

        <blockquote className="p-bookend-aside">
          <p>{note}</p>
        </blockquote>

        {equation && equation.length > 0 ? <IntroEquation equation={equation} /> : null}
      </div>
    </div>
  );
}

export function PrincipleIntro({
  principleNumber,
  simple,
  note,
  variant = "editorial",
  term,
  questions,
  includeNote,
  equation,
}: PrincipleIntroProps) {
  switch (variant) {
    case "question":
      return (
        <IntroQuestion
          simple={simple}
          note={note}
          questions={questions}
          equation={equation}
          includeNote={includeNote}
        />
      );
    case "definition":
      return <IntroDefinition simple={simple} note={note} term={term} equation={equation} />;
    case "prose":
      return <IntroProse simple={simple} note={note} />;
    default:
      return (
        <IntroEditorial
          principleNumber={principleNumber}
          simple={simple}
          note={note}
          equation={equation}
        />
      );
  }
}
