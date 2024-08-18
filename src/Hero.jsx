import ArrowButton from './ArrowButton';
import Button from './Button';
import GraphFrame from './GraphFrame';
import HitRate from './HitRate';
import SalesFrame from './SalesFrame';
import ServicesCard from './ServicesCard';

function Hero() {
  return (
    <div className="container">
      <div className="box">
        <section className="hero-section">
          <div className="hero-section-text-box">
            <div className="hero-section-text-container">
              <div className="hero-section-description">
                <h1 className="hero-section-title">Заголовок для слайдера</h1>
                <h3 className="hero-section-subtitle">
                  Краткое описание УТП продукта, максимально две строки текста
                </h3>
              </div>

              <Button>Смотреть решение</Button>
            </div>

            <div className="arrows-container">
              <ArrowButton rotation={180} />
              <ArrowButton />
            </div>
          </div>

          <div className="hero-section-graphics-container">
            <SalesFrame />
            <ServicesCard
              icon="/chart-icon.svg"
              text="Аналитика"
              cardId="card-1"
            />
            <ServicesCard
              icon="/users-icon.svg"
              text="Клиенты"
              cardId="card-2"
            />
            <ServicesCard icon="/bag-icon.svg" text="Заказы" cardId="card-3">
              <img src="/action-icon.svg" alt="Action Icon" />
            </ServicesCard>

            <GraphFrame />
            <HitRate />
          </div>
          <div className="hero-section-graphics-mob">
            <img src="/hero-full-mob.png" alt="Hero Section Image" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
