import Aside from '../Nav/Nav';
import Header from '../Header/Header';

import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Aside />
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default Layout;
