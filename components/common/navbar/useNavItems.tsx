import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useNavItems() {
  const pathname = usePathname();

  const navs = useMemo(() => {
    if (pathname.endsWith("/about")) {
      return [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
      ];
    }
    return [
      { name: "Work", href: "#work" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ];
  }, [pathname]);

  return { navs };
}
