import {
  sdd01DeathLabels,
  sdd01DeathReviewSteps,
  sdd01HubRoles,
  sdd01ScatteredWork,
  sdd01StorageTools,
} from "@/lib/sdd/sdd-01-content";
import { BranchLayout, FlowConnector, FlowNode, ForkEntry } from "./sdd-01-diagram-parts";

export function Sdd01DeathDiagram() {
  const docsLabel = sdd01StorageTools.join(" / ");

  return (
    <figure className="p1-diagram sdd01-diagram sdd01-death-story" aria-labelledby="sdd01-death-caption">
      <div className="sdd01-death-act sdd01-death-act--alive">
        <p className="sdd01-death-act-kicker">{sdd01DeathLabels.sourceOfTruth}</p>

        <div className="sdd01-death-hub">
          <ForkEntry>
            <FlowNode label="Specification" variant="accent" className="sdd01-death-spec-node" />

            <BranchLayout columns={4} entryStem joined className="sdd01-death-hub-branch">
              {sdd01HubRoles.map((role) => (
                <p key={role} className="sdd01-death-hub-role">
                  {role}
                </p>
              ))}
            </BranchLayout>
          </ForkEntry>
        </div>

        <FlowConnector className="sdd01-death-v-connector" />

        <p className="sdd01-death-review-steps">{sdd01DeathReviewSteps.join(" · ")}</p>

        <FlowConnector className="sdd01-death-v-connector" />

        <div className="sdd01-death-docs-shelf">
          <p className="sdd01-death-docs-shelf-label">{docsLabel}</p>
        </div>

        <p className="sdd01-death-written-once">{sdd01DeathLabels.writtenOnce}</p>
      </div>

      <div className="sdd01-death-break" aria-label={sdd01DeathLabels.breakAria}>
        <span className="sdd01-death-break-rule" aria-hidden="true" />
        <div className="sdd01-death-break-visual">
          <span className="sdd01-death-break-stem" aria-hidden="true" />
          <p className="sdd01-death-break-label">{sdd01DeathLabels.breakLabel}</p>
        </div>
      </div>

      <div className="sdd01-death-act sdd01-death-act--scattered">
        <p className="sdd01-death-scatter-caption">{sdd01DeathLabels.scatterCaption}</p>

        <div className="sdd01-death-scatter-stage">
          <div className="sdd01-death-spec-ghost">
            <FlowNode label="Specification" variant="dashed" />
            <p className="sdd01-death-no-return">{sdd01DeathLabels.noReturn}</p>
          </div>

          <ul className="sdd01-death-scatter-list">
            {sdd01ScatteredWork.map((item) => (
              <li key={item.role} className="sdd01-death-scatter-row">
                <FlowNode label={item.role} className="sdd01-death-role-node" />
                <span className="sdd01-death-scatter-arrow" aria-hidden="true" />
                <FlowNode label={item.tool} variant="accent" className="sdd01-death-tool-node" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sdd01-death-punchline" role="note">
        <p>{sdd01DeathLabels.punchline}</p>
      </div>

      <figcaption id="sdd01-death-caption" className="p1-diagram-caption">
        Các cuộc họp và review tạo ra kỳ vọng, nhưng workflow thực tế không còn xoay quanh
        specification.
      </figcaption>
    </figure>
  );
}
