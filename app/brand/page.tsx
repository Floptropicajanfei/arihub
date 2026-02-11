export default function BrandPage() {
  return (
    <main className="page brand-page">
      <section className="br-hero">
        <div className="br-hero-figure">
          <img src="/brandingheader.png" alt="Branding hero" />
        </div>
        <div className="br-hero-glow" />
        <div className="br-hero-content">
          <h1>Branding</h1>
        </div>
      </section>

      <section className="br-gallery">
        <div className="br-image-row right">
          <div className="br-image-slot">
            <img src="/branding1.png" alt="Brand visual 1" className="br-image-fill" />
          </div>
          <div className="br-image-caption">
            <h3>Built With Intention</h3>
            <p>This logo was designed to feel deliberate and considered. Every element exists for a reason, with nothing added purely for decoration. The goal was to create a mark that feels confident in its simplicity and strong enough to represent the brand as it continues to grow.</p>
          </div>
        </div>
        <div className="br-image-row left">
          <div className="br-image-caption">
            <h3>Simplicity at the Core</h3>
            <p>The design is intentionally minimal, allowing the logo to remain clear and recognisable in any setting. By reducing the form to its essentials, the identity becomes easier to use, easier to scale, and easier to remember. This simplicity reflects a brand that values clarity over excess.</p>
          </div>
          <div className="br-image-slot">
            <img src="/branding2.png" alt="Brand visual 2" className="br-image-fill" />
          </div>
        </div>
          <div className="br-image-row right">
          <div className="br-image-slot">
            <img src="/branding3.png" alt="Brand visual 3" className="br-image-fill" />
          </div>
          <div className="br-image-caption">
            <h3>A Contemporary Form</h3>
            <p>The smooth curves and balanced geometry give the logo a clean, modern character. It feels at home in digital spaces, interfaces, and products without relying on trends that may quickly fade. The result is a mark that feels current while remaining timeless.</p>
          </div>
        </div>
        <div className="br-image-row left">
          <div className="br-image-caption">
            <h3>The Road Forward</h3>
            <p>A flowing line runs through the logo, representing a road and a sense of movement. It reflects progress, exploration, and the idea of moving forward without being rigid or constrained. The curved path suggests growth shaped by experience rather than a fixed or linear journey.</p>
          </div>
          <div className="br-image-slot">
            <img src="/branding4.png" alt="Brand visual 4" className="br-image-fill" />
          </div>
        </div>
          <div className="br-image-row right">
          <div className="br-image-slot">
            <img src="/branding5.png" alt="Brand visual 5" className="br-image-fill" />
          </div>
          <div className="br-image-caption">
            <h3>Direction and Progress</h3>
            <p>The upward structure of the logo subtly communicates momentum and ambition. It suggests development over time and a clear sense of direction, reinforcing the idea of building something meaningful with purpose and focus.</p>
          </div>
        </div>
        <div className="br-image-row left">
          <div className="br-image-caption">
            <h3>Designed to Last</h3>
            <p>The logo remains consistent across different colourways and contexts, strengthening recognition while allowing flexibility. This balance between consistency and adaptability ensures the identity can evolve naturally without losing what makes it recognisable.</p>
          </div>
          <div className="br-image-slot">
            <img src="/branding6.png" alt="Brand visual 6" className="br-image-fill" />
          </div>
        </div>
      </section>
    </main>
  );
}
