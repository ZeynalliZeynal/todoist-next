interface NavLinks {
  href?: string;
  content: string;
  label?: string;
  hasPopup?: boolean;
}

export const NAV_LINKS: NavLinks[] = [
  {
    href: "/features",
    content: "Features",
    label: "features",
  },
  {
    href: "/forTeams",
    content: "For teams",
    label: "forTeams",
  },
  {
    content: "Resources",
    label: "resources",
    hasPopup: true,
  },
  {
    href: "/pricing",
    content: "Pricing",
    label: "pricing",
  },
];
