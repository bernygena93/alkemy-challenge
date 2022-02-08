/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getCategories } from "../../service/categoriesService";
import Category from "../../components/category/Category";
import CategoriesList from "../../components/lists/CategoriesList";
import BudgetContext from "../../context/BudgetContext";
import styles from "../form.module.css";
import { save } from "../../service/operationsService";

function Operation() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const typeForm = watch("type");
  const context = useContext(BudgetContext);
  const navigate = useNavigate();
  const categories = useFetch(getCategories, context.user.user.id);
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    setListCategories(
      categories.filter((category) => {
        return typeForm === category.type;
      }),
    );
  }, [typeForm, categories]);

  useEffect(() => {
    setValue("userId", context.user.user.id);
  }, [context]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      await save(data);
      navigate("/");
    } catch (err) {
      console.log(err, "error al agregar una operacion");
    }
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
      <div className={styles.categoryContainer}>
        <Category
          type={typeForm}
          setCategories={setListCategories}
          categories={listCategories}
        />
        <CategoriesList
          categories={listCategories}
          setValue={setValue}
          setCategories={setListCategories}
        />
      </div>
    </div>
  );
}

export default Operation;
