import { NavLink } from 'react-router-dom';
import { navItems } from './Nav.constants';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <ul className={styles.list}>
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
