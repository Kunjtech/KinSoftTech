if ("serviceWorker" in navigator) {
  const registerServiceWorker = () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Could not register the KinSoftTech service worker:", error);
    });
  };

  if (document.readyState === "complete") {
    registerServiceWorker();
  } else {
    window.addEventListener("load", registerServiceWorker, { once: true });
  }
}
