import React from "react";

export type CommissionCardProps = {
  title: string;
  description: string;

  // allow either naming
  items?: string[];
  features?: string[];

  // allow either naming
  price?: string;
  priceNote?: string;

  footerText?: string;
  icon?: React.ReactNode;

  unavailable?: boolean;
  emailTo?: string;
};

export default function CommissionCard({
  title,
  description,
  items,
  features,
  price,
  priceNote,
  footerText,
  icon,
  unavailable = false,
  emailTo = "youremail@example.com",
}: CommissionCardProps) {
  const list = items ?? features ?? [];
  const shownPrice = price ?? priceNote;
  const contactLabel = footerText ?? "Contact";

  return (
    <div className={`commission-box ${unavailable ? "is-unavailable" : ""}`}>
      <div className="commission-main">
        <h3 className="commission-title">
          {icon ? <span className="commission-icon">{icon}</span> : null}
          {title}
        </h3>

        <p className="commission-desc">{description}</p>

        {shownPrice ? (
          <p className="commission-priceNote">{shownPrice}</p>
        ) : null}

        {list.length > 0 ? (
          <ul className="commission-list">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <a
        href={unavailable ? undefined : `mailto:${emailTo}`}
        className={`commission-contact ${unavailable ? "contact-disabled" : ""}`}
        aria-disabled={unavailable}
      >
        {contactLabel}
      </a>

      {unavailable && (
        <div className="commission-overlay">
          <span>Currently Unavailable</span>
        </div>
      )}
    </div>
  );
}
