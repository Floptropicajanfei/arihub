"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/brand", label: "Brand" },
  { href: "/projects", label: "Projects" },
  { href: "/home", label: "Home" },
];

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-bar">
      <Link href="/" className="brand top-brand" aria-label="Home">
        <img src="/favicon.ico?v=2" alt="Logo" />
      </Link>

      <div className="top-nav minimal-nav">
        <div className="nav-inline">
          <button
            className={`menu-fab ${menuOpen ? "menu-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                className="inline-links"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {navLinks.map((link, i) => (
                  <motion.span
                    key={link.href}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ delay: 0.02 * i }}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
