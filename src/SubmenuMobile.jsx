import { useEffect } from 'react';
import Button from './Button';

function SubmenuMobile({ links, hamburgerOpen }) {
  const style = {
    transform: `translate(${hamburgerOpen ? '0' : '200%'})`,
    transition: 'all 0.3s',
  };
  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hamburgerOpen]);

  return (
    <div className="header-submenu-mobile" style={style}>
      <div className="header-submenu-link">
        <a href="#" className="products">
          Продукты
        </a>
        <div className="header-submenu-sublinks">
          <div className="header-submenu-sublink">Продажи на маркетплейсах</div>
          <div className="header-submenu-sublink">Интернет-магазин</div>
          <div className="header-submenu-sublink">Нишевые маркетплейсы</div>
          <div className="header-submenu-sublink">Шина данных (ESB)</div>
        </div>
      </div>

      <ul className="header-submenu-links">
        {links.slice(1).map((link, i) => (
          <li className="header-submenu-link" key={i}>
            <a href="#">{link.text}</a>
          </li>
        ))}
      </ul>

      <Button>Свяжитесь с нами</Button>
    </div>
  );
}

export default SubmenuMobile;
