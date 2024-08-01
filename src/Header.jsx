import Button from './Button';

function Header() {
  return (
    <div className="container">
      <div className="box">
        <header className="header-section">
          <logo className="header-section-logo">
            <img src="src/assets/logo.png" alt="Logo" />
          </logo>

          <div className="header-section-links">
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                Продукты
              </a>
              <img src="src/assets/Arrow.svg" alt="arrow" />
            </div>
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                Платформа
              </a>
            </div>
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                Кейсы
              </a>
            </div>
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                Партнёрам
              </a>
            </div>
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                Блог
              </a>
            </div>
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                О компании
              </a>
            </div>
            <div className="header-section-link">
              <a href="#" className="header-section-link-text">
                Контакты
              </a>
            </div>

            <Button>Свяжитесь с нами</Button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
