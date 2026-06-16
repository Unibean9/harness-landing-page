export type NavItem = {
  label: string;
  href: string;
  shortLabel?: string;
};

export const navItems: NavItem[] = [
  { label: "Nguyên lý", href: "/nguyen-ly/harness-first" },
  {
    label: "Spec Driven Development",
    shortLabel: "SDD",
    href: "/spec-driven-development/executable-specifications",
  },
  { label: "Dự án", href: "/du-an" },
  { label: "Tài nguyên", href: "/tai-nguyen" },
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
];
