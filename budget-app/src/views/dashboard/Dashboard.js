import React from "react";
import OperationsList from "../../components/lists/OperationsList";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.operationsContainer}>
          {" "}
          <div className={styles.listContainer}>
            <OperationsList title="Ingresos" operations={[]} />
          </div>
          <div className={styles.listContainer}>
            <OperationsList title="Egresos" operations={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
