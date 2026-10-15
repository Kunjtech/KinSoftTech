import "../styles.css";
import Script from "next/script";
import GoogleAnalyticsPageViews from "../components/GoogleAnalyticsPageViews.jsx";

export const metadata = {
  title: {
    default: "Web Development & Digital Solutions | KinSoftTech",
    template: "%s | KinSoftTech",
  },
  description:
    "KinSoftTech provides website design and development, e-commerce websites, mobile app development, and custom software for growing businesses.",
  keywords: [
    "website design",
    "web development",
    "business websites",
    "e-commerce website development",
    "mobile app development",
    "custom software development",
  ],
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