import CommissionCard from "./CommissionCard";

export default function Commissions() {
  return (
    <section className="commissions-section">
      <h2>Commissions</h2>

      <div className="commissions-grid">
        <CommissionCard
          title="Roblox Building"
          description="Full Roblox build package – models, mockups, and more."
          items={[
            "Roblox game",
            "Models",
            "2 mockups or updates",
            "Black Friday discount",
          ]}
          price="Starting at £49"
          unavailable={false}
        />

        <CommissionCard
          title="Discord Bot"
          description="Full Discord bot package – code, commands, setup."
          items={[
            "Full Discord bot",
            "15 commands",
            "Setup",
            "Black Friday discount",
          ]}
          price="Starting at £99"
          unavailable={false}
        />

        <CommissionCard
          title="Brand Visual Identity"
          description="Full branding package – logos, colours, typography."
          items={[
            "Logos",
            "Visual identity",
            "Carefully chosen colours",
            "Mockups",
          ]}
          price="Starting at £149"
            unavailable={false}
        />
      </div>
    </section>
  );
}
