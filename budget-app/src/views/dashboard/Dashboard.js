import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Balance from "../../components/balance/Balance";
import OperationsList from "../../components/lists/OperationsList";
import styles from "./dashboard.module.css";
import BudgetContext from "../../context/BudgetContext";
import { getOperations } from "../../service/operationsService";
import { getCategories } from "../../service/categoriesService";
import Thread from "../../components/thread/Thread";

function Dashboard() {
  const context = useContext(BudgetContext);
  const { id } = context.user.user;
  const [income, setIncome] = useState([]);
  const [expenditure, setExpenditure] = useState([]);
  const operations = useFetch(getOperations, id);
  const categories = useFetch(getCategories, id);

  useEffect(() => {
    if (operations.length > 0) {
      setIncome(operations.filter((operation) => operation.type === "income"));
      setExpenditure(
        operations.filter((operation) => operation.type === "expenditure"),
      );
    } else if (operations.length === 0) {
      setIncome([]);
    }
  }, [operations]);

  return (
    <div className={styles.container}>
      <Balance income={income} expenditure={expenditure} />
      <div className={styles.body}>
        <div className={styles.operationsContainer}>
          <div className={styles.listContainer}>
            <OperationsList
              title="Ingresos"
              operations={income}
              setOperations={setIncome}
            />
          </div>
          <div className={styles.listContainer}>
            <OperationsList
              title="Egresos"
              operations={expenditure}
              setOperations={setExpenditure}
            />
          </div>
        </div>
        <div className={styles.graphContainer}>
          <div className={styles.threadContainer}>
            {categories.map(
              (category) =>
                category.type === "income" && (
                  <Thread
                    key={category.id}
                    category={category.name}
                    operations={income}
                    income
                    type="orangered"
                  />
                ),
            )}
          </div>
          <div className={styles.threadContainer}>
            {categories.map(
              (category) =>
                category.type === "expenditure" && (
                  <Thread
                    key={category.id}
                    category={category.name}
                    operations={expenditure}
                    type="#24d1a6"
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
