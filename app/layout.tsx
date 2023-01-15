import NavBar from "./nav-bar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body style={{ background: "grey" }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
