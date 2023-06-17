import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__avatar">
        <span>АИ</span>
      </div>
      <div className="header__wrapper">
        <h2 className="header__name">Ксения Любасова</h2>
        <ul className="header__list">
          <li className="header__item">
            <a href="https://t.me/EvaKerrigan" className="header__link" target="_blank">
              Telegram
            </a>
          </li>
          <li className="header__item">
            <a href="https://github.com/evakerrigan" className="header__link" target="_blank">
              GitHub
            </a>
          </li>
          <li className="header__item">
            <a href="https://evakerrigan.github.io/cv/" className="header__link" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
