import InfoCards from "./components/InfoCards";
import CommissionCard from "./components/CommissionCard";
import Row from "./components/Row";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="page">

      {/* HERO (CENTERED TEXT) */}
      <section className="hero hero-centered">
        <h1>Hi, I’m Ari</h1>
        <p>I am a designer, developer and a freelancer.</p>
      </section>

      {/* INFO CARDS — 3 BESIDE EACH OTHER, CENTERED */}
      <Row cols={3}>
        <InfoCards
          cards={[
            {
              icon: "🎓",
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
              icon: "🌍",
              lines: ["Native Polish", "Native English", "+ Learning more"],
            },
          ]}
        />

        <InfoCards
          cards={[
            {
              icon: "💼",
              lines: [
                "2 Years Graphic Design",
                "3 Years Roblox Studio",
              ],
            },
          ]}
        />
      </Row>

      {/* COMMISSIONS */}
      <section className="section">
        <h2>Commissions</h2>

        <Row cols={2}>
          <CommissionCard
            title="Roblox Building"
            description="Full Roblox build package – models, mockups, and more."
            items={[
              "Roblox game",
              "Models",
              "2 mockups or updates",
            ]}
            price="Starting at £49"
          />

          <CommissionCard
            title="Brand Visual Identity"
            description="Full branding package – logos, colours, typography."
            items={[
              "Logos",
              "Visual identity",
              "Mockups",
            ]}
            price="Starting at £149"
          />
        </Row>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>My Projects</h2>

        <Row cols={2}>
          <ProjectCard
            title="XStage Productions"
            preview="A production and development brand focused on Roblox experiences and services."
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
