import CommissionCard from "../components/Commissions";

export default function Commissions() {
  return (
    <main className="page commissions-page">

      <h1 className="section-title">Commissions</h1>

      {/* MAIN COMMISSIONS */}
      <section className="commission-grid">
        <CommissionCard
          title="Roblox Building"
          description="Full Roblox build package – models, mockups and more."
          features={[
            "Roblox game",
            "Models",
            "2 mockups or updates",
            "Black Friday discount",
          ]}
          priceNote="Starting at £49"
          footerText="Contact Me"
          unavailable
          icon={<span>🧱</span>}
        />

        <CommissionCard
          title="Discord Bot"
          description="Full Discord bot package – code, commands, setup."
          features={[
            "Full Discord bot",
            "15 commands",
            "Setup",
            "Black Friday discount",
          ]}
          priceNote="Starting at £99"
          footerText="Contact Me"
          unavailable
          icon={<span>🤖</span>}
        />

        <CommissionCard
          title="Brand Visual Identity"
          description="Full branding package – logos, colours, typography."
          features={[
            "Logos",
            "Visual identity",
            "Chosen colours",
            "Mockups",
          ]}
          priceNote="Starting at £149"
          footerText="Contact Me"
          unavailable
          icon={<span>🎨</span>}
        />
      </section>

      {/* EXTRA OPTIONS */}
      <section className="commission-grid secondary">
        <CommissionCard
          title="Extra Options"
          features={[
            "Fast delivery — £30",
            "Extra updates — £50 each",
            "Distribution rights — £200",
          ]}
          unavailable
        />

        <CommissionCard
          title="Extra Options"
          features={[
            "Fast delivery — £30",
            "Extra commands — £50 each",
            "24/7 hosting — £5 / month",
          ]}
          unavailable
        />

        <CommissionCard
          title="Extra Options"
          features={[
            "Fast delivery — £30",
            "Extra mockups — £30 each",
            "Source files (PSD, AI) — £10",
          ]}
          unavailable
        />
      </section>

    </main>
  );
}
