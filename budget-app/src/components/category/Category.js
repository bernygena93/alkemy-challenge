/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "../../views/form.module.css";
import BudgetContext from "../../context/BudgetContext";
import { save } from "../../service/categoriesService";

function Category({ type, setCategories, categories }) {
  const { register, handleSubmit, setValue } = useForm();
  const context = useContext(BudgetContext);
  const { id } = context.user.user;

  useEffect(() => {
    setValue("type", type);
    setValue("userId", id);
  }, [type]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const category = await save(data);
      setCategories([...categories, category.data.category]);
      console.log(category.data.category);
    } catch (err) {
      console.log(err, "error al crear categoria");
    }
  });

  return (
    <form className={styles.categoryForm} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="name">
        Nombre
      </label>
      <input
        id="name"
        className={styles.input}
        type="text"
        name="name"
        {...register("name")}
      />
      <button type="submit" className={styles.button}>
        Agregar
      </button>
    </form>
  );
}

export default Category;
