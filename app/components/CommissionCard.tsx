type CommissionCardProps = {
  title: string;
  description: string;
  items?: string[];
  unavailable?: boolean;
};

export default function CommissionCard({
  title,
  description,
  items = [],
  unavailable = false,
}: CommissionCardProps) {
  return (
    <div className={`commission-box ${unavailable ? "is-unavailable" : ""}`}>

      <div className="commission-main">
        <h3>{title}</h3>
        <p>{description}</p>

        {items.length > 0 && (
          <ul className="commission-list">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <a
        href={unavailable ? undefined : "mailto:floptropicajanfei@gmail.com"}
        className={`commission-contact ${
          unavailable ? "contact-disabled" : ""
        }`}
      >
        Contact
      </a>

      {unavailable && (
        <div className="commission-overlay">
          Currently Unavailable
        </div>
      )}
    </div>
  );
}
