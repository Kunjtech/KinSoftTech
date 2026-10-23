import "../styles.css";
import Script from "next/script";
import GoogleAnalyticsPageViews from "../components/GoogleAnalyticsPageViews.jsx";

export const metadata = {
  title: {
    default: "Web Development Company in Agra | KinSoftTech",
    template: "%s | KinSoftTech",
  },
  description:
    "KinSoftTech is a web development company in Agra creating business websites, online stores, mobile apps, and custom software.",
  keywords: [
    "web development company in Agra",
    "website development in Agra",
    "web design company in Agra",
    "website design",
    "web development",
    "business websites",
    "e-commerce website development",
    "mobile app development",
    "custom software development",
  ],
  openGraph: {
    siteName: "KinSoftTech",
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Script src="/register-service-worker.js" strategy="afterInteractive" />
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