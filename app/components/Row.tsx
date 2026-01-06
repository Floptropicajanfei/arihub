type RowProps = {
  cols?: 1 | 2 | 3;
  children: React.ReactNode;
};

export default function Row({ cols = 2, children }: RowProps) {
  const className =
    cols === 1 ? "row row-1" : cols === 2 ? "row row-2" : "row row-3";

  return <div className={className}>{children}</div>;
}
