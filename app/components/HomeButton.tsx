// app/components/HomeButton.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="homebtn-wrap">
      <Link href="/" className="homebtn">
        ← Home
      </Link>
    </div>
  );
}
