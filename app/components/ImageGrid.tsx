export default function ImageGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="image-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div className="image-box" key={i}>
          Image placeholder
        </div>
      ))}
    </div>
  );
}
