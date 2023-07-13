import Aside from '../Nav/Nav';
import Header from '../Header/Header';

import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import TableOfContents from '../TableOfContents/TableOfContents';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Aside />
        <section className={styles.content}>
          <Outlet />
        </section>
        <TableOfContents />
      </main>
    </>
  );
}

export default Layout;
