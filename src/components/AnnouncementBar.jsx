export default function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="KinSoftTech introduction">
      <div className="announcement-bar-inner">
        <span className="announcement-bar-dot" aria-hidden="true" />
        <span><strong>Websites, mobile apps & digital systems</strong> for businesses ready to grow.</span>
        <a href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </aside>
  );
}