import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styles from "./layout.module.css";
import BudgetContext from "../../context/BudgetContext";

function Layout() {
  const cont = useContext(BudgetContext);
  const navigate = useNavigate();

  const logout = () => {
    cont.logoutUser();
    navigate("/login");
  };

  return (
    <BudgetContext.Consumer>
      {(context) => (
        <>
          <nav className={styles.container}>
            <div>
              <Link to="/" className={styles.link}>
                <h2 className={styles.title}>Budget-Managment</h2>
              </Link>
            </div>
            {context.islogged ? (
              <div className={styles.containerButton}>
                <span className={styles.userData}>
                  <AccountCircle />
                  {context.user?.user.email}
                </span>
                <div className={styles.divider}>|</div>
                <button
                  type="button"
                  className={styles.logout}
                  onClick={logout}>
                  Salir
                </button>
              </div>
            ) : (
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
            )}
          </nav>
          <Outlet />
        </>
      )}
    </BudgetContext.Consumer>
  );
}

export default Layout;
