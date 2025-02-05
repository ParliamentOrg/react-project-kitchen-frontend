import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

const LoggedOutView = (props) => {
  const { t } = useTranslation();

  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            {t('Главная')}
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            {t('Войти')}
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            {t('Зарегистрироваться')}
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = (props) => {
  const { t } = useTranslation();

  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            {t('Главная')}
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose" />
            &nbsp;
            {t('Новая Статья')}
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />
            &nbsp;
            {t('Настройки')}
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <span>
              {t('Привет')}
              ,
              {props.currentUser.username}
            </span>
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

function Header(props) {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {props.appName.toLowerCase()}
        </Link>
        <LoggedOutView currentUser={props.currentUser} />
        <LoggedInView currentUser={props.currentUser} />
      </div>
    </nav>
  );
}

export default Header;
