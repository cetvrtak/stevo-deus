function Submenu({ selected }) {
  const submenuStyle = {
    overflow: 'hidden',
    height: selected === 0 ? 200 : 0,
    transition: '1s',
    border: selected === 0 ? '1px solid rgb(213, 221, 229)' : '',
  };
  const containerStyle = {
    display: selected === 0 ? 'flex' : 'none',
  };

  return (
    <div className="header-submenu" style={submenuStyle}>
      <div className="header-submenu-cards-container">
        <div className="header-submenu-card">
          <h3 className="header-submenu-card-title">
            Продажи на маркетплейсах
          </h3>
          <div className="header-submenu-card-desc">
            Автоматизация продаж на универсальных маркетплейсах
          </div>
        </div>

        <div className="header-submenu-card">
          <h3 className="header-submenu-card-title">Интернет-магазин</h3>
          <div className="header-submenu-card-desc">
            Автоматизация онлайн-продаж для вашего интернет-магазина
          </div>
        </div>

        <div className="header-submenu-card">
          <h3 className="header-submenu-card-title">Нишевые маркетплейсы</h3>
          <div className="header-submenu-card-desc">
            Управление собственным маркетплейсом
          </div>
        </div>

        <div className="header-submenu-card">
          <h3 className="header-submenu-card-title">Шина данных (ESB)</h3>
          <div className="header-submenu-card-desc">
            Управление обменом данных и интеграции
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submenu;
