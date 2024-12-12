export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-7xl m-auto px-4">{children}</main>;
}
