function SalesFrame() {
  return (
    <div className="hero-section-sales-frame">
      <div className="hero-section-sales-relative">
        <span className="hero-section-sales-relative-title">Продажи</span>
        <div className="hero-section-sales-relative-numbers">
          <span className="hero-section-sales-relative-increase">+2.5%</span>
          <img
            src="./src/assets/arrow-increase.svg"
            alt="Arrow Up Green"
            className="hero-section-sales-relative-icon"
          />
        </div>
      </div>
      <span className="hero-section-sales-total">₽ 1 025 000</span>
      <span className="hero-section-sales-absolute">
        (₽ 1 000 000 в прошлом году)
      </span>
    </div>
  );
}

export default SalesFrame;
