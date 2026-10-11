import "../styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "KinSoftTech | Make your next move digital",
  description: "Modern websites, e-commerce stores, mobile apps and digital solutions for growing businesses.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}