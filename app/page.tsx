// app/page.tsx
import Link from "next/link";
import InfoCards from "./components/InfoCards";
import CommissionCard from "./components/CommissionCard";
import Row from "./components/Row";
import ProjectCard from "./components/ProjectCard";
import ProductsStrip from "./components/ProductsStrip";
import DonationCard from "./components/DonationCard";

export default async function Home() {
  return (
    <main className="page">

      <section className="hero hero-centered simple-hero hero-compact">
        <p className="eyebrow">Owner of AriCorp & AriProducts</p>
        <h1>
          Hi, <span className="wave"></span> I’m Ari.
        </h1>
        <p className="hero-lede">
I am a designer, developer and a freelancer.
        </p>
      </section>

      <section className="section info-ribbon">
        <Row cols={3}>
          <InfoCards
            cards={[
              {
                icon: <img src="/icons/Mortarboard.png" alt="School" />,
                lines: [
                  "Y10 Student",
                  "Studying GCSEs: Health & Social Care, Drama, iMedia, History",
                ],
              },
            ]}
          />

          <InfoCards
            cards={[
              {
                icon: <img src="/icons/translate.png" alt="Languages" />,
                lines: ["Native Polish", "Native English", "+ Learning more"],
              },
            ]}
          />

          <InfoCards
            cards={[
              {
                icon: <img src="/icons/laptop-01.png" alt="Experience" />,
                lines: ["2 Years Graphic Design", "3 Years Roblox Studio", "2 Years Web Development"],
              },
            ]}
          />
        </Row>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <article className="product-box experience-card">
          <div className="product-body experience-body">
            <div className="experience-item">
              <div className="experience-title">AriCorp, Founder, Leadership</div>
              <div className="experience-dates">Oct 2025 – Present</div>
              <p className="experience-desc">
                Creator of AriCorp, steering vision and operations with a growing team.
              </p>
            </div>
            <div className="experience-item">
              <div className="experience-title">AriProducts, Founder</div>
              <div className="experience-dates">Nov 2025 – Present</div>
              <p className="experience-desc">
                Owner of AriProducts, creates, tests and releases products
              </p>
            </div>
            <div className="experience-item">
              <div className="experience-title">XStage Productions, Leadership, Developer, Staffing Lead</div>
              <div className="experience-dates">Nov 2025 – Present</div>
              <p className="experience-desc">
                Co-Founder and Co-Lead Developer; manage staffing, write bots, and run day-to-day operations.
              </p>
            </div>
            <div className="experience-item">
              <div className="experience-title">jaDevelopment, Partnership Manager</div>
              <div className="experience-dates">Nov 2024 – Present</div>
              <p className="experience-desc">
                Handle partnerships, alliances, documentation updates, and PR inquiries alongside the PR Director.
              </p>
            </div>
            <div className="experience-item">
              <div className="experience-title">Brampton Primary School, Behaviour Support Staff</div>
              <div className="experience-dates">May 2025 – Jul 2025</div>
              <p className="experience-desc">
                Supported behaviour-related operations, reporting, and student guidance across classrooms.
              </p>
            </div>
            <div className="experience-item">
              <div className="experience-title">Vizo Store, Founder</div>
              <div className="experience-dates">Aug 2024 – Feb 2025</div>
              <p className="experience-desc">
                Led the community, handled all operations, and created products for the store lineup.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="section">
        <h2>Awards & Certifications</h2>
        <article className="product-box awards-card">
          <div className="product-body awards-body">
            <div className="award-item">
              <div className="award-title">AWS Cloud Practitioner</div>
            </div>
            <div className="award-item">
              <div className="award-title">Certified Entry-Level Python Programmer</div>
            </div>
            <div className="award-item">
              <div className="award-title">Emergency First Aid at Work Award</div>
            </div>
            <div className="award-item">
              <div className="award-title">City &amp; Guilds Level 1 IT User Skills Award</div>
            </div>
          </div>
        </article>
      </section>

      <section className="section" id="support">
        <h2>Support the work</h2>
        <Row cols={1}>
          <DonationCard paypalUrl="https://paypal.me/aridonate" />
        </Row>
      </section>

      <section className="section">
        <h2>Commissions</h2>

        <article className="product-box" style={{ textAlign: "center" }}>
          <div className="product-body">
            <p className="callout-eyebrow" style={{ marginBottom: 4 }}>
              We moved!
            </p>
            <h3 className="product-title" style={{ marginBottom: 6 }}>
              Commissions now live on our new website.
            </h3>
            <p className="product-desc" style={{ marginBottom: 12 }}>
              View every package and add-on in one place.
            </p>
          </div>
          <div className="product-footer" style={{ justifyContent: "center" }}>
            <a
              className="btn-primary"
              href="https://ariproducts.aricorp.co.uk/commissions"
              target="_blank"
              rel="noreferrer"
            >
              Go to commissions
            </a>
          </div>
        </article>
      </section>

      <section className="section">
        <h2>Products</h2>

        <article className="product-box" style={{ textAlign: "center" }}>
          <div className="product-body">
            <p className="callout-eyebrow" style={{ marginBottom: 4 }}>
              We moved!
            </p>
            <h3 className="product-title" style={{ marginBottom: 6 }}>
              Products are now on the new site.
            </h3>
            <p className="product-desc" style={{ marginBottom: 12 }}>
              Explore demos, pricing, and media there.
            </p>
          </div>
          <div className="product-footer" style={{ justifyContent: "center" }}>
            <a
              className="btn-primary"
              href="https://ariproducts.aricorp.co.uk/products"
              target="_blank"
              rel="noreferrer"
            >
              Go to products
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
