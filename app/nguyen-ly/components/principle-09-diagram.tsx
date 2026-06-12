import {
  principle09FocusedAgents,
  principle09SuperAgentRoles,
} from "@/lib/principles/principle-09-content";

export function Principle09Diagram() {
  return (
    <figure className="p1-diagram p9-diagram" aria-labelledby="p9-diagram-caption">
      <div className="p2-diagram-split">
        <div className="p2-diagram-panel p2-diagram-panel--low">
          <p className="p2-diagram-panel-label">Super Agent</p>
          <div className="p9-super-box">
            <p className="p9-super-title">Một Agent · mọi trách nhiệm</p>
            <ul className="p9-super-tags">
              {principle09SuperAgentRoles.map((role) => (
                <li key={role} className="p9-super-tag">
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <p className="p2-diagram-panel-result">Prompt phình to · context khó kiểm soát</p>
        </div>

        <div className="p2-diagram-panel p2-diagram-panel--high">
          <p className="p2-diagram-panel-label">Small focused agents</p>
          <ul className="p9-agent-grid">
            {principle09FocusedAgents.map((agent) => (
              <li key={agent.label} className="p9-agent-card">
                <p className="p9-agent-label">{agent.label}</p>
                <p className="p9-agent-hint">{agent.hint}</p>
              </li>
            ))}
          </ul>
          <p className="p2-diagram-panel-result">Mỗi Agent một mục tiêu · dễ test và thay thế</p>
        </div>
      </div>

      <figcaption id="p9-diagram-caption" className="p1-diagram-caption">
        Agent nhỏ với phạm vi trách nhiệm hẹp thường đáng tin cậy hơn một Super Agent cố làm mọi
        thứ.
      </figcaption>
    </figure>
  );
}
