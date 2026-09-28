import "../styles.css";

export const metadata = {
  title: "KinSoftTech | Make your next move digital",
  description: "Modern websites, e-commerce stores, mobile apps and digital solutions for growing businesses.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}