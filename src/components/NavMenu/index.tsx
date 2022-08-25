import React from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './NavMenu.module.scss';
import { Link } from 'react-router-dom';

const routes = [
  { label: 'Início', to: '/' },
  { label: 'Cardápio', to: '/cardapio' },
  { label: 'Sobre', to: '/sobre' },
];

const NavMenu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route) => (
          <li key={route.label} className={styles.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
