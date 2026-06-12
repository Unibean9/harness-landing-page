import { principle03BadFlows, principle03GoodFlows } from "@/lib/principles/principle-03-content";

export function Principle03FlowCompare() {
  return (
    <div className="p3-flow-compare">
      <div className="p3-flow-panel p3-flow-panel--bad">
        <p className="p3-flow-panel-label">Tránh</p>
        <ul className="p3-flow-list">
          {principle03BadFlows.map((flow) => (
            <li key={flow} className="p3-flow-item">
              {flow.split(" → ").map((part, index, parts) => (
                <span key={`${flow}-${part}`}>
                  <span className={index === parts.length - 1 ? "p3-flow-node p3-flow-node--agent" : "p3-flow-node"}>
                    {part}
                  </span>
                  {index < parts.length - 1 ? (
                    <span className="p3-flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="p3-flow-panel p3-flow-panel--good">
        <p className="p3-flow-panel-label">Thiết kế đúng</p>
        <ul className="p3-flow-list">
          {principle03GoodFlows.map((flow) => (
            <li key={flow} className="p3-flow-item">
              {flow.split(" → ").map((part, index, parts) => (
                <span key={`${flow}-${part}`}>
                  <span
                    className={
                      part === "Harness"
                        ? "p3-flow-node p3-flow-node--harness"
                        : part === "Agent"
                          ? "p3-flow-node p3-flow-node--agent"
                          : "p3-flow-node"
                    }
                  >
                    {part}
                  </span>
                  {index < parts.length - 1 ? (
                    <span className="p3-flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
