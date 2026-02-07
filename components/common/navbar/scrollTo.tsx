"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

export default function ScrollTo({
  href,
  children,
  className = "",
  ...LinkProps
}: LinkProps & { children: React.ReactNode; className?: string }) {
  const router = useRouter();
  return (
    <Link
      {...LinkProps}
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const id = href.toString().replace("#", "");

        const el = document.getElementById(id);
        if (!el) {
          console.warn(`Scroll target #${id} not found`);
          router.push("/" + href.toString());
          return;
        }
        el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
