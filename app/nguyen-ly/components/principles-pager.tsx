import Link from "next/link";
import type { PrinciplePagerLink } from "@/lib/principles-data";

interface PrinciplesPagerProps {
  prev?: PrinciplePagerLink;
  next?: PrinciplePagerLink;
}

export function PrinciplesPager({ prev, next }: PrinciplesPagerProps) {
  if (!prev && !next) return null;

  return (
    <nav className="principles-pager" aria-label="Điều hướng trang">
      <div className="principles-pager-inner">
        {prev ? (
          <Link href={prev.href} className="principles-pager-link principles-pager-link--prev">
            <span className="principles-pager-arrow" aria-hidden="true">
              ←
            </span>
            <span className="principles-pager-text">
              <span className="principles-pager-label">Trang trước</span>
              <span className="principles-pager-title">{prev.label}</span>
            </span>
          </Link>
        ) : (
          <span className="principles-pager-spacer" aria-hidden="true" />
        )}

        {next ? (
          <Link href={next.href} className="principles-pager-link principles-pager-link--next">
            <span className="principles-pager-text">
              <span className="principles-pager-label">Trang sau</span>
              <span className="principles-pager-title">{next.label}</span>
            </span>
            <span className="principles-pager-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ) : (
          <span className="principles-pager-spacer" aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
