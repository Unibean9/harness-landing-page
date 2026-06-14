type PrincipleSummaryProps = {
  principleNumber: number;
  headline: string;
  points: readonly string[];
};

export function PrincipleSummary({
  principleNumber,
  headline,
  points,
}: PrincipleSummaryProps) {
  return (
    <div className="p-bookend p-bookend--summary">
      <span className="p-bookend-summary-watermark" aria-hidden="true">
        {String(principleNumber).padStart(2, "0")}
      </span>

      <div className="p-bookend-summary-inner">
        <p className="p-bookend-summary-headline">{headline}</p>

        <ol className="p-bookend-summary-steps">
          {points.map((point, index) => (
            <li key={point} className="p-bookend-summary-step">
              <span className="p-bookend-step-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
