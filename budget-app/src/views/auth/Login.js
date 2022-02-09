/* eslint-disable react/jsx-props-no-spreading */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaAuthSignIn } from "../../utils/validations/validationForms";
import { signin } from "../../service/authService";
import styles from "../form.module.css";
import BudgetContext from "../../context/BudgetContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAuthSignIn),
  });
  const context = useContext(BudgetContext);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = await signin(data);
      context.loginUser(user.data);
      navigate("/");
    } catch (err) {
      console.log(err, "error al iniciar sesión");
    }
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="email">
          Correo Electronico
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          {...register("email")}
        />
        <small className={styles.errors}>{errors.email?.message}</small>
        <label className={styles.label} htmlFor="password">
          Contraseña
        </label>
        <input
          className={styles.input}
          id="paswword"
          type="password"
          name="password"
          {...register("password")}
        />
        <small className={styles.errors}>{errors.password?.message}</small>
        <button className={styles.button} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
