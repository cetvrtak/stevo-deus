import { useState } from 'react';
import Button from './Button';
import NavLink from './NavLink';
import Submenu from './Submenu';

function Header() {
  const links = [
    { text: 'Продукт', arrow: true },
    { text: 'Платформа' },
    { text: 'Кейсы' },
    { text: 'Партнёрам' },
    { text: 'Блог' },
    { text: 'О компании' },
    { text: 'Контакты' },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <div className="box" style={{ position: 'relative' }}>
        <header className="header-section">
          <div className="header-section-logo">
            <img src="src/assets/logo.png" alt="Logo" />
          </div>

          <nav className="menu">
            <ul className="nav-links">
              {links.map((link, i) => (
                <NavLink
                  text={link.text}
                  isSelected={selected === i}
                  onSelectLink={() => setSelected(selected === i ? null : i)}
                  key={i}
                >
                  {link.arrow && (
                    <img
                      className="nav-link-image"
                      src="src/assets/Arrow.svg"
                      alt="arrow"
                    />
                  )}
                </NavLink>
              ))}

              <Button>Свяжитесь с нами</Button>
            </ul>
          </nav>
        </header>

        <Submenu selected={selected} />
      </div>
    </div>
  );
}

export default Header;
