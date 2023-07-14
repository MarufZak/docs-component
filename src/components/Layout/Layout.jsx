import Nav from '../Nav';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default Layout;
