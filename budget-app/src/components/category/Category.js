/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../views/form.module.css";

function Category() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
