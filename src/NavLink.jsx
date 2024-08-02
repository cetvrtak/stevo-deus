function NavLink({ text, isSelected, onSelectLink, children }) {
  return (
    <li onClick={onSelectLink}>
      <a
        href="#"
        className={`nav-link${isSelected ? ' nav-link-selected' : ''}`}
      >
        <span className="nav-link-text">{text}</span>
        {children}
      </a>
    </li>
  );
}

export default NavLink;
