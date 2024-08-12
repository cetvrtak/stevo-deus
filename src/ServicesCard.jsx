function ServicesCard({ icon, text, cardId, children }) {
  return (
    <div className="hero-section-services-card" id={cardId}>
      <img src={icon} alt="Chart Icon" className="hero-section-services-icon" />
      <span className="hero-section-services-text">{text}</span>
      <div className="hero-section-services-card-children">{children}</div>
    </div>
  );
}

export default ServicesCard;
