import Link from "next/link";

type Props = {
  href: string;
  imageSrc: string;
  name: string;
  priceLeft: string; // "$4"
  priceRight: string; // "R$1999"
  badge?: string;
};

export default function ProductCard({
  href,
  imageSrc,
  name,
  priceLeft,
  priceRight,
  badge,
}: Props) {
  return (
    <div className="product-card">
      <div className="product-media">
        {/* Use <img> for zero build pain */}
        <img className="product-img" src={imageSrc} alt={name} />
        {badge ? <span className="product-badge">{badge}</span> : null}
      </div>

      <div className="product-meta">
        <div className="product-name">{name}</div>
        <div className="product-price">
          <span className="product-price-main">{priceLeft}</span>
          <span className="product-price-sep">or</span>
          <span className="product-price-alt">{priceRight}</span>
        </div>
      </div>

      {/* Invisible full-card button */}
      <Link className="product-overlay-link" href={href} aria-label={`Open ${name}`} />
    </div>
  );
}
