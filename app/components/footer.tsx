import Link from "next/link";

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
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* COLUMNS */}
        <div className="footer-cols">
          <FooterColumn
            title="Me"
            links={[
              { label: "Discord", href: "https://discord.com/users/1213478713765666857#1458226454893432954", external: true },
              { label: "Twitter", href: "https://x.com/floptrop_", external: true },
              { label: "Mail", href: "mailto:floptropicajanfei@gmail.com", external: true },
            ]}
          />

          <FooterColumn
            title="Other"
            links={[
              { label: "Home", href: "/", external: false },
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
              { label: "Terms of Service", href: "/legal/terms" },
              { label: "Cookie Policy", href: "/legal/cookies" },
            ]}
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>Website coded & designed by Ari • Made in England • © {new Date().getFullYear()} AriHub</p>
      </div>
    </footer>
  );
}
