/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAuthSignUp } from "../../utils/validations/validationForms";
import styles from "../form.module.css";
import { signup } from "../../service/authService";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAuthSignUp),
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await signup(data);
      navigate("/login");
    } catch (err) {
      setErrorMessage("error al crear usaurio");
      console.log(err.message);
    }
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="username">
          Nombre de usuario
        </label>
        <input
          className={styles.input}
          id="username"
          type="text"
          name="username"
          {...register("username")}
        />
        <small className={styles.errors}>{errors.username?.message}</small>
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
          Registrarse
        </button>
        <small className={styles.errors}>{errorMessage}</small>
      </form>
    </div>
  );
}

export default Register;
