import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <nav className={styles.container}>
        <h2 className={styles.title}>Budget-Managment</h2>
        <div className={styles.containerButton}>
          <button type="button" className={styles.button}>
            Ingresar
          </button>
          <button type="button" className={styles.button}>
            Registrarse
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
