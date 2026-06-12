interface Principle11JsonBlockProps {
  filename?: string;
}

export function Principle11JsonBlock({ filename = "response.json" }: Principle11JsonBlockProps) {
  return (
    <div className="p11-code-panel">
      <div className="p11-code-header">
        <div className="p11-code-traffic" aria-hidden="true">
          <span className="p11-code-dot p11-code-dot--close" />
          <span className="p11-code-dot p11-code-dot--minimize" />
          <span className="p11-code-dot p11-code-dot--zoom" />
        </div>
        <span className="p11-code-filename">{filename}</span>
      </div>
      <pre className="p11-code-block">
        <code>
          <span className="p11-code-brace">{"{"}</span>
          {"\n  "}
          <span className="p11-json-key">&quot;interest&quot;</span>
          <span className="p11-code-punct">: </span>
          <span className="p11-json-string">&quot;Information Technology&quot;</span>
          <span className="p11-code-punct">,</span>
          {"\n  "}
          <span className="p11-json-key">&quot;confidence&quot;</span>
          <span className="p11-code-punct">: </span>
          <span className="p11-json-number">0.91</span>
          {"\n"}
          <span className="p11-code-brace">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
