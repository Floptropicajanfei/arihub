// app/hidden/page.tsx

export const dynamic = "force-dynamic";

export default function HiddenPage() {
  return (
    <main className="page">
      <section className="hidden-wrap">
        <header className="hidden-head">
          <h1 className="hidden-title">Hidden</h1>
          <p className="hidden-desc">
            You reached the interesting part of this website... Created for my friends :3
          </p>
        </header>

        <section className="hidden-grid">
          {/* Replace src values with your own images */}
          {[
            "/hidden/1.webp",
            "/hidden/2.jpg",
            "/hidden/3.webp",
            "/hidden/4.jpeg",
            "/hidden/5.jpeg",
            "/hidden/6.jpg",
            "/hidden/7.avif",
            "/hidden/8.jpg",
            "/hidden/9.png",
            "/hidden/10.jpg",
            "/hidden/11.webp",
            "/hidden/12.avif",
            "/hidden/13.webp",
            "/hidden/14.jpg",
            "/hidden/15.avif",
            "/hidden/16.webp",
            "/hidden/17.png",
            "/hidden/18.jpg",
            "/hidden/20.png",
          ].map((src) => (
            <div key={src} className="hidden-card">
              <img src={src} alt="" />
            </div>
          ))}
        </section>
      </section>

      <style>{`
        .hidden-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 60px;
        }

        .hidden-head {
          text-align: center;
          margin-bottom: 32px;
        }

        .hidden-title {
          font-size: clamp(2rem, 4vw, 2.6rem);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .hidden-desc {
          opacity: 0.75;
        }

        .hidden-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 18px;
        }

        .hidden-card {
          border-radius: 18px;
          overflow: hidden;
          background: #0f0f0f;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .hidden-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
        }

        .hidden-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </main>
  );
}
