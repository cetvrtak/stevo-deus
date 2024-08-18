function NavDot({ progress = 0 }) {
  const style = {
    background: `conic-gradient(rgb(0, 86, 254) 0% ${progress}%, rgb(255, 255, 255) ${progress}% 100%)`,
  };

  return (
    <div className="dot-container">
      <div className="nav-dot" style={style}></div>
    </div>
  );
}

export default NavDot;
