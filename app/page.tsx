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
      <section className="hero hero-centered">
        <h1>Hi, I’m Ari</h1>
        <p>I am a designer, developer and a freelancer.</p>
      </section>

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

      <section className="section">
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

      <section className="section">
        <h2>My Projects</h2>

        <Row cols={2}>
          <ProjectCard
            title="XStage Productions"
            preview="A production which develops and builds amazing stages and concerts for all users to enjoy."
            imageSrc="/projects/xstage.png"
            href="/projects/xstage-productions"
            buttonLabel="Learn more"
          />

          <ProjectCard
            title="Giuris"
            preview="An AI-powered moderation and management system designed for Roblox."
            imageSrc="/projects/giuris.png"
            href="/projects/giuris"
            buttonLabel="Learn more"
          />
        </Row>
      </section>
    </main>
  );
}
