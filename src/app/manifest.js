export default function manifest() {
  return {
    id: "/",
    name: "KinSoftTech | Digital Solutions",
    short_name: "KinSoftTech",
    description:
      "Web development, websites, mobile apps, and digital solutions from Agra-based KinSoftTech.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbfdff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/pwa-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
