import { cn } from "@/lib/utils/cn";

interface EditorialTableProps {
  columns: { key: string; label: React.ReactNode; className?: string }[];
  rows: Record<string, React.ReactNode>[];
  highlightColumn?: string;
  className?: string;
  size?: "default" | "large";
}

export function EditorialTable({
  columns,
  rows,
  highlightColumn,
  className,
  size = "default",
}: EditorialTableProps) {
  const isLarge = size === "large";

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full min-w-[540px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "pr-6 font-display italic font-normal",
                  isLarge ? "pb-5 text-base" : "pb-4 text-sm",
                  col.key === highlightColumn ? "text-primary" : "text-primary/80",
                  col.className
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-border/70 last:border-b-0">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "pr-6 leading-relaxed align-top",
                    isLarge ? "py-5 text-base" : "py-4 text-sm",
                    col.key === highlightColumn
                      ? "font-medium text-brand-primary"
                      : "text-brand-primary/75",
                    col.className
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
