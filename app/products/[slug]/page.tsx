// app/products/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/lib/productsData";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const images = product.pageImages?.length
    ? product.pageImages.slice(0, 3)
    : product.cardImages?.length
    ? product.cardImages.slice(0, 3)
    : product.cardImage
    ? [product.cardImage]
    : [];

  const showPurchase = (product.onSale ?? true) && !product.comingSoon;
  const showDemo = !!product.hasDemoCenter && !!product.demoCenterUrl && showPurchase;

  return (
    <main className="page">
      <div className="prod-wrap">
        <section className="prod-hero">
          <div className="prod-titleblock">
            <div className="prod-icon" aria-hidden="true">
            </div>

            <div className="prod-text">
              <h1 className="prod-title">{product.name}</h1>

              {/* description is a button/link like here (click -> scroll to images) */}
              <a className="prod-sub" href="#gallery">
                {product.tagline || product.shortDescription}
              </a>
            </div>
          </div>

          {/* purchase card */}
          <aside className="prod-buy">
            {showPurchase ? (
              <>
                <div className="buy-price">
                  <img className="robux" src="/robux.png" alt="Robux" />
                  <span>{product.robuxPrice}</span>
                </div>

                <div className="buy-actions">
                  <a className="buy-btn" href={product.robloxGameUrl} target="_blank" rel="noreferrer">
                    Purchase
                  </a>

                  {showDemo ? (
                    <a className="demo-btn" href={product.demoCenterUrl!} target="_blank" rel="noreferrer">
                      Demo center
                    </a>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="buy-soon">
                <div className="soon-title">Coming soon</div>
                <div className="soon-text">{product.comingSoonText || "This product is not on sale yet. Check back later."}</div>
              </div>
            )}
          </aside>
        </section>

        {/* longer description */}
        <section className="prod-long">
          <p className="long">{product.description || product.pageDescription || product.shortDescription}</p>
        </section>

        {/* images DOWN */}
        <section id="gallery" className="prod-gallery">
          {images.map((src) => (
            <div key={src} className="shot">
              <img src={src} alt="" />
            </div>
          ))}
        </section>
      </div>

      <style>{`
        .prod-wrap{max-width:1200px;margin:0 auto;padding:22px 20px 70px}
        .prod-topbar{display:flex;align-items:center;margin-bottom:16px}
        .back{
          text-decoration:none;color:#0b0b0b;
          font-weight:600;
          opacity:.85;
          padding:8px 10px;
          border-radius:14px;
        }
        .back:hover{background:rgba(0,0,0,.04);opacity:1}

        /* HERO */
        .prod-hero{
          display:grid;
          grid-template-columns: 1fr auto;
          gap:22px;
          align-items:start;
          margin-bottom:18px;
        }

        .prod-titleblock{
          display:flex;
          gap:18px;
          align-items:flex-start;
          padding-top:6px;
        }

        .prod-title{margin:0;font-size:clamp(2.2rem,4.6vw,3.4rem);line-height:1.05;color:#0b0b0b;font-weight:750;letter-spacing:-.02em}
        .prod-sub{
          display:inline-flex;
          margin-top:10px;
          color:rgba(0,0,0,.75);
          text-decoration:none;
          font-weight:500;
          border-radius:14px;
          padding:6px 10px;
          margin-left:-10px;
        }
        .prod-sub:hover{background:rgba(0,0,0,.04);color:rgba(0,0,0,.9)}

        /* BUY CARD */
        .prod-buy{
          width:min(320px, 92vw);
          border-radius:22px;
          border:1px solid rgba(0,0,0,.10);
          background:#fff;
          padding:14px;
          position:sticky;
          top:16px;
          align-self:start;
        }
        .buy-price{
          display:flex;align-items:center;justify-content:flex-end;
          gap:10px;
          font-weight:800;
          font-size:1.35rem;
          color:#0b0b0b;
          padding:6px 8px 10px;
        }
        .robux{width:22px;height:22px;display:block}

        .buy-actions{display:grid;gap:10px}
        .buy-btn, .demo-btn{
          height:46px;
          border-radius:18px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:750;
          text-decoration:none;
          border:1px solid rgba(0,0,0,.12);
        }
        .buy-btn{background:#0b0b0b;color:#fff}
        .buy-btn:hover{filter:brightness(.95)}
        .demo-btn{background:#fff;color:#0b0b0b}
        .demo-btn:hover{background:rgba(0,0,0,.04)}

        .buy-soon{padding:10px 8px}
        .soon-title{font-weight:800;color:#0b0b0b;font-size:1.05rem;margin-bottom:6px}
        .soon-text{opacity:.75;color:#0b0b0b}

        /* LONG DESCRIPTION */
        .prod-long{margin: 10px 0 26px}
        .long{
          margin:0;
          max-width: 760px;
          color:rgba(0,0,0,.8);
          line-height:1.6;
          font-size:1.02rem;
        }

        /* IMAGES DOWN */
        .prod-gallery{
          display:grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap:14px;
          margin-top: 18px;
        }
        .shot{
          border-radius:22px;
          overflow:hidden;
          border:1px solid rgba(0,0,0,.08);
          background:rgba(0,0,0,.04);
        }
        .shot img{width:100%;height:220px;object-fit:cover;display:block}

        @media (max-width: 980px){
          .prod-hero{grid-template-columns:1fr}
          .prod-buy{position:relative;top:auto;width:100%}
          .prod-gallery{grid-template-columns:1fr}
          .shot img{height:240px}
        }
      `}</style>
    </main>
  );
}
