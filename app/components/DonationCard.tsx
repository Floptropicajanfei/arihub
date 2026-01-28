type DonationCardProps = {
  paypalUrl: string;
};

export default function DonationCard({ paypalUrl }: DonationCardProps) {
  return (
    <div className="donation-card">
      <div className="donation-top">
        <div className="donation-content">
          <div className="donation-icon" aria-hidden>
            ☕
          </div>

          <div className="donation-copy">
            <h3>Buy me a coffee</h3>
            <p>
              If you enjoy the development progress I do and all the little snippets of my work, you can chip in to keep the
              work flowing. Every penny helps a ton.
            </p>
          </div>
        </div>

        <div className="donation-actions">
          <a className="donation-btn donation-btn-primary" href={paypalUrl} target="_blank" rel="noreferrer">
            PayPal
          </a>
        </div>
      </div>
    </div>
  );
}
