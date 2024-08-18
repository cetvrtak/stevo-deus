import ArrowButton from './ArrowButton';
import NavDot from './NavDot';

function Automatization() {
  return (
    <div className="container">
      <div className="box">
        <section className="automatization-section">
          <div className="automatization-section-text">
            <span className="automatization-section-title">
              Название продукта
            </span>
            <span className="automatization-section-desc">
              для средних и крупных торговых и производственных компаний
            </span>
          </div>

          <div className="automatization-section-card">
            <div className="automatization-section-card-content">
              <img
                src="./automatization-pie-chart.png"
                alt="Pie Chart 42%"
                className="automatization-section-card-chart"
              />
              <div className="automatization-section-card-text">
                Автоматизация продаж <strong>увеличивает скорость</strong>{' '}
                обслуживания клиентов <strong>на 42%</strong>
              </div>
            </div>

            <div className="automatization-section-slider-nav">
              <div className="dots-container">
                <NavDot progress="42" />
                <NavDot />
                <NavDot />
                <NavDot />
                <NavDot />
                <NavDot />
                <NavDot />
                <NavDot />
              </div>

              <div className="arrows-container">
                <ArrowButton rotation={180} />
                <ArrowButton />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Automatization;
