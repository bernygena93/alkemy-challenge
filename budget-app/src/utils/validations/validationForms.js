import * as yup from "yup";

export const schemaOperation = yup.object().shape({
  concept: yup.string().required("Concepto es requerido"),
  amount: yup.string().required("Monto es requerido"),
  date: yup.string().required("Fecha es requerida"),
  categoryId: yup.string().required("Categoria es requerida"),
});

export const schemaCategory = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
});

export const schemaAuthSignUp = yup.object().shape({
  username: yup.string().required("Nombre de usuario es requerido"),
  email: yup.string().required("Email es requerido"),
  password: yup.string().required("Contraseña es requerida"),
});

export const schemaAuthSignIn = yup.object().shape({
  email: yup.string().required("Email es requerido"),
  password: yup.string().required("Contraseña es requerida"),
});
