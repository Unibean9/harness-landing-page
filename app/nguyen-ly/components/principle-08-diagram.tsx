import { principle08ControlVerbs, principle08GoodStack } from "@/lib/principles/principle-08-content";

export function Principle08Diagram() {
  return (
    <figure className="p1-diagram p8-diagram" aria-labelledby="p8-diagram-caption">
      <div className="p8-stack">
        {principle08GoodStack.map((layer, index) => {
          const isHarness = layer.label === "Harness";
          const isLast = index === principle08GoodStack.length - 1;

          return (
            <div key={layer.label} className="p8-stack-layer">
              <div
                className={
                  isHarness
                    ? "p8-stack-node p8-stack-node--harness"
                    : isLast
                      ? "p8-stack-node p8-stack-node--agent"
                      : "p8-stack-node"
                }
              >
                <p className="p8-stack-label">{layer.label}</p>
                <p className="p8-stack-hint">{layer.hint}</p>
              </div>

              {!isLast ? (
                <div className="p8-stack-arrow" aria-hidden="true">
                  <span>↓</span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <ul className="p8-control-row">
        {principle08ControlVerbs.map((verb) => (
          <li key={verb.label} className="p8-control-pill">
            <span className="p8-control-label">{verb.label}</span>
            <span className="p8-control-hint">{verb.hint}</span>
          </li>
        ))}
      </ul>

      <figcaption id="p8-diagram-caption" className="p1-diagram-caption">
        Harness hoặc Application kiểm soát luồng chạy — Agent chỉ chịu trách nhiệm hoàn thành từng
        bước được giao.
      </figcaption>
    </figure>
  );
}
