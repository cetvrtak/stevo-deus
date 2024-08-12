import { useState } from 'react';
import Button from './Button';
import NavLink from './NavLink';
import Submenu from './Submenu';
import SubmenuMobile from './SubmenuMobile';

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
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="container header-container">
      <div className="box header-box">
        <header className="header-section">
          <div className="header-section-logo">
            <img src="/src/assets/logo.png" alt="Logo" />
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
                      src="/src/assets/Arrow.svg"
                      alt="arrow"
                    />
                  )}
                </NavLink>
              ))}

              <Button>Свяжитесь с нами</Button>
            </ul>
            <div
              className="hamburger-menu"
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
              {hamburgerOpen && (
                <img src="/src/assets/close.png" alt="Close Icon" />
              )}
              {!hamburgerOpen && (
                <img
                  src="/src/assets/hamburger.png"
                  alt="Hamburger Menu Icon"
                />
              )}
            </div>
          </nav>
        </header>

        <Submenu selected={selected} />
        <SubmenuMobile links={links} hamburgerOpen={hamburgerOpen} />
      </div>
    </div>
  );
}

export default Header;
