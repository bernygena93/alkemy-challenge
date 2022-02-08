import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./balance.module.css";

function Balance({ income, expenditure }) {
  const [styleBalance, setStyleBalance] = useState(styles.positiveBalance);
  const navigate = useNavigate();

  const totalIncome = income.reduce(
    (total, value) => total + parseInt(value.amount, 10),
    0,
  );

  const totalExpenditure = expenditure.reduce(
    (total, value) => total + parseInt(value.amount, 10),
    0,
  );
  const balance = totalIncome - totalExpenditure;

  useEffect(() => {
    if (balance >= 0) setStyleBalance(styles.positiveBalance);
    else setStyleBalance(styles.negativeBalance);
  }, [balance]);

  const handleNavigate = () => {
    navigate("/operation/new-operation");
  };
  return (
    <div className={styles.container}>
      <div className={styles.income}>
        <span>Ingresos totales</span>
        <span>{totalIncome}</span>
      </div>
      <div className={styles.expenditure}>
        <span>Egresos totales</span>
        <span>{totalExpenditure}</span>
      </div>
      <div className={styleBalance}>
        <div className={styles.result}>
          <span>Balance</span>
          <span>{balance}</span>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={handleNavigate}>
          Agregar Movimiento
        </button>
      </div>
    </div>
  );
}

export default Balance;
