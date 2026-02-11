"use client";

import Link from "next/link";
import FooterPulseGrid from "./FooterPulseGrid";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="footer-col">
      <h4 className="footer-title">{title}</h4>
      <ul className="footer-links">
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ) : (
              <Link href={l.href}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  // Change to "amber" or "red" to toggle the visible status pill.
  const status: "green" | "amber" | "red" = "green";

  return (
    <footer className="site-footer" data-status={status}>
      <FooterPulseGrid />
      <div className="footer-inner">

        <div className="footer-left">
          {/* BRAND */}
          <div className="footer-brand">
            <img src="/favicon.ico" alt="AriHub favicon" className="footer-favicon" />
            <span className="footer-brand-text">AriCorp</span>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="footer-cols">
          <FooterColumn
            title="Me"
            links={[
              { label: "Discord", href: "https://discord.com/users/1213478713765666857#1458226454893432954", external: true },
              { label: "Twitter", href: "https://x.com/floptrop_", external: true },
              { label: "Mail", href: "mailto:floptropicajanfei@gmail.com", external: true },
              { label: "Resume", href: "https://docs.google.com/document/d/1mGq4bRINoU3vUobnNTidGCr2r-zLR8ZrGI2-qF4adjg/edit?usp=sharing", external: true },
            ]}
          />

          <FooterColumn
            title="Other"
            links={[
              { label: "Home", href: "/", external: false },
              { label: "XStage Careers", href: "/careers" },
              { label: "XStage Productions", href: "/projects/xstage-productions" },
              { label: "Projects Discord Server", href: "https://discord.gg/JfE2rv8FQj", external: true },
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { label: "Policies", href: "/legal/policies" },
              { label: "Copyright", href: "/legal/copyright" },
              { label: "Privacy Policy", href: "/legal/privacy" },
              { label: "General Terms of Service", href: "/legal/terms" },
              { label: "Cookie Policy", href: "/legal/cookies" },
            ]}
          />
        </div>
      </div>

      {/* STATUS STRIP (sits at the bottom; only one row visible based on data-status) */}
      <div className="footer-status-bar" aria-label="Service status">
        <div className="status-row" data-status-variant="green">
          <span className="status-dot status-green" aria-hidden />
          <span className="status-label">Services operational</span>
        </div>
        <div className="status-row" data-status-variant="amber">
          <span className="status-dot status-amber" aria-hidden />
          <span className="status-label">Degraded performance</span>
        </div>
        <div className="status-row" data-status-variant="red">
          <span className="status-dot status-red" aria-hidden />
          <span className="status-label">Service outage</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Website coded & designed by Ari • Made in England • © {new Date().getFullYear()} AriHub</p>
      </div>
    </footer>
  );
}
