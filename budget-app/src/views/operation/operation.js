/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaOperation } from "../../utils/validations/validationForms";
import useFetch from "../../hooks/useFetch";
import { getCategories } from "../../service/categoriesService";
import Category from "../../components/category/Category";
import CategoriesList from "../../components/lists/CategoriesList";
import BudgetContext from "../../context/BudgetContext";
import styles from "../form.module.css";
import { getById, save, update } from "../../service/operationsService";

function Operation() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaOperation),
  });
  const typeForm = watch("type");
  const { id } = useParams();
  const [select, setSelect] = useState(true);
  const context = useContext(BudgetContext);
  const navigate = useNavigate();
  const categories = useFetch(getCategories, context.user.user.id);
  const [listCategories, setListCategories] = useState([]);
  const operation = useFetch(getById, id);

  useEffect(() => {
    setListCategories(
      categories.filter((category) => {
        return typeForm === category.type;
      }),
    );
  }, [typeForm, categories]);

  useEffect(() => {
    if (id !== "new-operation" && operation) {
      setValue("id", operation.id);
      setValue("concept", operation.concept);
      setValue("amount", operation.amount);
      setValue("date", operation.date);
      setValue("type", operation.type);
      setValue("categoryId", operation.category?.id);
      setSelect(false);
    }
    setValue("userId", context.user.user.id);
  }, [context, operation, context]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      if (id !== "new-operation") {
        await update(data);
      } else await save(data);
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
        <small className={styles.errors}>{errors.concept?.message}</small>
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
        <small className={styles.errors}>{errors.amount?.message}</small>
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
        <small className={styles.errors}>{errors.date?.message}</small>
        {select && (
          <>
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
          </>
        )}

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
          errorMessage={errors.categoryId?.message}
          setCategories={setListCategories}
        />
      </div>
    </div>
  );
}

export default Operation;
