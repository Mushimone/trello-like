function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Trello {new Date().getFullYear()}</h1>
        <nav>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">Home</a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">Boards</a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">Templates</a>
                </li>
            </ul>

        </nav>
    </header>
  );
}   

export default Header;