import { cn } from "@/lib/utils/cn";
import { Children, Fragment, type ReactNode } from "react";

type NodeVariant = "default" | "accent" | "muted" | "danger" | "dashed";
type PanelTone = "muted" | "accent";

export function FlowConnector({
  direction = "down",
  tail = "arrow",
  className,
}: {
  direction?: "down" | "right";
  /** `stem` = line only, for connecting into a branch fork */
  tail?: "arrow" | "stem";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "sdd01-connector",
        direction === "right" ? "sdd01-connector--right" : "sdd01-connector--down",
        tail === "stem" && "sdd01-connector--stem",
        className
      )}
      aria-hidden="true"
    />
  );
}

/** @deprecated use FlowConnector */
export function FlowArrow({
  direction = "down",
  className,
}: {
  direction?: "down" | "right";
  className?: string;
}) {
  return <FlowConnector direction={direction} className={className} />;
}

export function FlowNode({
  label,
  hint,
  variant = "default",
  className,
}: {
  label: string;
  hint?: string;
  variant?: NodeVariant;
  className?: string;
}) {
  return (
    <div className={cn("sdd01-node", `sdd01-node--${variant}`, className)}>
      <p className="sdd01-node-label">{label}</p>
      {hint ? <p className="sdd01-node-hint">{hint}</p> : null}
    </div>
  );
}

export function FlowChain({
  steps,
  leakContext = false,
  accentFirst = true,
}: {
  steps: readonly string[];
  leakContext?: boolean;
  accentFirst?: boolean;
}) {
  return (
    <div className="sdd01-chain">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="sdd01-chain-step">
          <FlowNode label={step} variant={accentFirst && index === 0 ? "accent" : "default"} />
          {index < steps.length - 1 ? (
            <div className="sdd01-chain-link">
              <FlowConnector />
              {leakContext ? <span className="sdd01-leak-tag">−context</span> : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function FlowPipeline({
  steps,
  variant = "accent",
  label,
}: {
  steps: readonly string[];
  variant?: NodeVariant;
  label?: string;
}) {
  return (
    <div className="sdd01-pipeline-wrap">
      {label ? <p className="sdd01-section-label">{label}</p> : null}
      <ol className="sdd01-pipeline-track">
        {steps.map((step, index) => (
          <li key={`${step}-${index}`} className="sdd01-pipeline-step">
            <FlowNode label={step} variant={variant} />
            {index < steps.length - 1 ? <FlowConnector direction="right" /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function MismatchRow({
  left,
  right,
  symbol = "≠",
}: {
  left: string;
  right: string;
  symbol?: string;
}) {
  return (
    <div className="sdd01-mismatch-row">
      <FlowNode label={left} variant="accent" />
      <span className="sdd01-mismatch-symbol" aria-hidden="true">
        {symbol}
      </span>
      <FlowNode label={right} variant="danger" />
    </div>
  );
}

/** Panel label sits OUTSIDE the canvas box */
/** Centered vertical stack for diagram sections + connectors */
export function DiagramStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("sdd01-stack-flow", className)}>{children}</div>;
}

export function DiagramPanel({
  label,
  tone = "muted",
  result,
  children,
}: {
  label: string;
  tone?: PanelTone;
  result?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="sdd01-figure-panel">
      <figcaption className="sdd01-figure-label">{label}</figcaption>
      <div className={cn("sdd01-figure-canvas", `sdd01-figure-canvas--${tone}`)}>{children}</div>
      {result ? <p className="sdd01-figure-result">{result}</p> : null}
    </figure>
  );
}

export function DiagramSplit({ children }: { children: React.ReactNode }) {
  return <div className="sdd01-split-grid">{children}</div>;
}

export function ComparePanels({
  badLabel,
  goodLabel,
  badResult,
  goodResult,
  bad,
  good,
}: {
  badLabel: string;
  goodLabel: string;
  badResult?: string;
  goodResult?: string;
  bad: React.ReactNode;
  good: React.ReactNode;
}) {
  return (
    <div className="sdd01-diagram">
      <DiagramSplit>
        <DiagramPanel label={badLabel} tone="muted" result={badResult}>
          {bad}
        </DiagramPanel>
        <DiagramPanel label={goodLabel} tone="accent" result={goodResult}>
          {good}
        </DiagramPanel>
      </DiagramSplit>
    </div>
  );
}

/**
 * Wraps a parent block + branch fork so the entry stem connects flush (no gap).
 */
export function ForkEntry({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("sdd01-fork-entry", className)}>{children}</div>;
}

/**
 * CSS-grid branch — drops stay centered over each column (no SVG coordinate drift).
 */
export function BranchLayout({
  columns,
  className,
  hideRailOnMobile = false,
  entryStem = false,
  joined = false,
  children,
}: {
  columns: 2 | 3 | 4;
  className?: string;
  hideRailOnMobile?: boolean;
  /** Draw the vertical stem from the parent above into the fork bus */
  entryStem?: boolean;
  /** Tighten drop lines onto the bus */
  joined?: boolean;
  children: ReactNode;
}) {
  const items = Children.toArray(children);

  return (
    <div
      className={cn(
        "sdd01-branch-layout",
        `sdd01-branch-layout--${columns}`,
        entryStem && "sdd01-branch-layout--entry-stem",
        joined && "sdd01-branch-layout--joined",
        hideRailOnMobile && "sdd01-branch-layout--hide-rail-mobile",
        className
      )}
    >
      <div className="sdd01-branch-rail" aria-hidden="true">
        <span className="sdd01-branch-rail-stem" />
        <span className="sdd01-branch-rail-bus" />
      </div>
      {items.map((child, index) => (
        <div key={index} className="sdd01-branch-col">
          <span className="sdd01-branch-drop" aria-hidden="true" />
          {child}
        </div>
      ))}
    </div>
  );
}

/** Vertical link between stacked nodes inside one branch column */
export function BranchStackLink() {
  return <span className="sdd01-branch-stack-link" aria-hidden="true" />;
}

type GroupTone = "muted" | "accent" | "danger";

/** Wraps 2+ related nodes/chips so connectors attach to one box */
export function DiagramGroup({
  label,
  tone = "muted",
  className,
  bodyClassName,
  children,
}: {
  label?: string;
  tone?: GroupTone;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("sdd02-group", `sdd02-group--${tone}`, className)}>
      {label ? <p className="sdd02-group-label">{label}</p> : null}
      <div className={cn("sdd02-group-body", bodyClassName)}>{children}</div>
    </div>
  );
}

