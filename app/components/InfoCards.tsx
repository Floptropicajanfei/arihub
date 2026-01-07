type Card = {
  icon?: React.ReactNode;
  lines: string[];
};

export default function InfoCards({ cards }: { cards: Card[] }) {
  return (
    <div className="info-cards">
      {cards.map((card, i) => (
        <div className="info-card" key={i}>
          {card.icon && <div className="info-icon">{card.icon}</div>}
          <ul>
            {card.lines.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
