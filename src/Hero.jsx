import ArrowButton from './ArrowButton';
import Button from './Button';

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

export default Hero;
