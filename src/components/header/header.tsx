import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="navigation">
        <div className="white__dot"></div>
        <div className="navigation__list">
          <Link
            className={`navigation__list--item ${
              location.pathname === AppRoute.Main ? "active" : ""
            }`}
            to={AppRoute.Main}
          >
            <h2 className="navigation__title">Все заявки</h2>
          </Link>
          <Link
            className={`navigation__list--item ${
              location.pathname === AppRoute.Form ? "active" : ""
            }`}
            to={AppRoute.Form}
          >
            <h2 className="navigation__title">Создание заявки</h2>
          </Link>
        </div>
      </nav>
    </header>
  );
}
