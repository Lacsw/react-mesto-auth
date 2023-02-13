import { Link, Route, Routes } from 'react-router-dom';
import logo from '../images/header-logo.svg';

function Header({ userEmail, onLogout }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип Место" className="header__logo" />
      <Routes>
        <Route
          path="sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Зарегистрироваться
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__email">
              {userEmail}
              <Link onClick={onLogout} className="header__link">
                Выйти
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
