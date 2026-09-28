import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function PageShell({ children }) {
  return <><AnnouncementBar /><div id="top"><Navbar /></div><main>{children}</main><Footer /><WhatsAppButton /></>;
}