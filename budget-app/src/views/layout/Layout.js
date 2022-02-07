import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <nav className={styles.container}>
        <Link to="/" className={styles.link}>
          <h2 className={styles.title}>Budget-Managment</h2>
        </Link>
        <div className={styles.containerButton}>
          <Link to="/login" className={styles.link}>
            <button type="button" className={styles.button}>
              Ingresar
            </button>
          </Link>
          <Link to="/register" className={styles.link}>
            <button type="button" className={styles.button}>
              Registrarse
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
