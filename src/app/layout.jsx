import "../styles.css";
import Script from "next/script";
import GoogleAnalyticsPageViews from "../components/GoogleAnalyticsPageViews.jsx";

export const metadata = {
  title: "KinSoftTech | Make your next move digital",
  description: "Modern websites, e-commerce stores, mobile apps and digital solutions for growing businesses.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        {gaId ? (
          <>
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                window.gtag = function(){window.dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', ${JSON.stringify(gaId)});`}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
              strategy="afterInteractive"
            />
            <GoogleAnalyticsPageViews />
          </>
        ) : null}
      </body>
    </html>
  );
}