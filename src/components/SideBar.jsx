import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Logo from './Logo';

import styles from './SideBar.module.css';
// TODO:create a new footer component
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>

      <Outlet />
      {/*  is like a childre prop */}

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyriht {new Date().getFullYear()} by WolrdWiase Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
