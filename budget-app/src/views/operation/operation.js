/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../form.module.css";

function Operation() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="concept">
          Concepto
        </label>
        <textarea
          className={styles.input}
          id="concept"
          rows={3}
          cols={3}
          {...register("concept")}
        />
        <label className={styles.label} htmlFor="amount">
          Monto
        </label>
        <input
          className={styles.input}
          id="amount"
          type="number"
          name="amount"
          {...register("amount")}
        />
        <label className={styles.label} htmlFor="date">
          Fecha
        </label>
        <input
          className={styles.input}
          id="date"
          type="date"
          name="date"
          {...register("date")}
        />

        <label className={styles.label} htmlFor="type">
          Tipo de Movimiento
        </label>
        <select
          className={styles.input}
          id="type"
          name="type"
          {...register("type")}>
          <option value="income">Ingreso</option>
          <option value="expenditure">Egreso</option>
        </select>

        <button id="button" className={styles.button} type="submit">
          Registrar Movimiento
        </button>
      </form>
    </div>
  );
}

export default Operation;
