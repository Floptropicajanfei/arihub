import CommissionCard from "./CommissionCard";

export default function Commissions() {
  return (
    <section className="commissions-section">
      <h2>Commissions</h2>

      <div className="commissions-grid">
        <CommissionCard
          title="Roblox Building"
          description="Full Roblox build package – models, mockups and more."
          items={[
            "Roblox game",
            "Models",
            "2 mockups or updates",
            "Black Friday discount",
          ]}
          price="Starting at £49"
          unavailable={true}
          footerText="Contact"
        />

        <CommissionCard
          title="Website"
          description="Full Website package including, code, custom made assets, detailed designs"
          items={[
            "Full website inclding a max of 5 pages",
            "Free website hosting",
            "Setup",
            "Black Friday discount",
          ]}
          price="Starting at £99"
          unavailable={true}
          footerText="Contact"
        />
      </div>
    </section>
  );
}
