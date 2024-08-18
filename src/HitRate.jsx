import CircularProgressBar from './CircularProgressBar';

function HitRate() {
  return (
    <div className="hero-section-hit-rate-frame">
      <div className="hero-section-hit-rate-box">
        <CircularProgressBar progress="75">
          <img
            src="/target-icon.svg"
            alt="Target Icon"
            className="hero-section-hit-rate-icon"
          />
        </CircularProgressBar>
        <div className="hero-section-hit-rate-desc">
          <span className="hero-section-hit-rate-percentage">75%</span>
          <span className="hero-section-hit-rate-text">
            Рост целевых значений
          </span>
        </div>
      </div>

      <div className="hero-section-hit-rate-box">
        <CircularProgressBar progress="76">
          <img
            src="/bag-icon-blue.svg"
            alt="Bag Icon"
            className="hero-section-hit-rate-icon"
          />
        </CircularProgressBar>
        <div className="hero-section-hit-rate-desc">
          <span className="hero-section-hit-rate-percentage">76%</span>
          <span className="hero-section-hit-rate-text">Сделок за год</span>
        </div>
      </div>
    </div>
  );
}

export default HitRate;
