import * as Yup from "yup";

export const dataSign = {
  in: {
    title: "Log in",
    subtitle: "Login into existing account.",
    textOr: "Or",
    subTextOr: "Log in with...",
    accountText: "Don’t have an account? Create One.",

    initialValues: {
      email: "",
      password: "",
    },

    inputs: [
      {
        name: "email",
        placeholder: "E-mail",
        type: "email",
        id: 1,
      },
      {
        name: "password",
        placeholder: "Password",
        type: "password",
        id: 2,
      },
    ],
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Не валидная почта")
        .required("Поле Eimail обязательно"),
      password: Yup.string()
        .required("Пароль обязателен")
        .min(6, "Пароль слишком короткий")
        .max(14, "Пароль слишком длинный"),
    }),
  },
  up: {
    title: "Sign up",
    subtitle: "Fill all field for create an account.",
    textOr: "Or",
    subTextOr: "Sign up with...",
    accountText: "Already have an account? Please Log in.",

    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    inputs: [
      {
        name: "name",
        placeholder: "Username",
        type: "text",
        id: 1,
      },
      {
        name: "email",
        placeholder: "E-mail",
        type: "email",
        id: 2,
      },
      {
        name: "password",
        placeholder: "Password",
        type: "password",
        id: 3,
      },
    ],
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Имя обязательно")
        .min(2, "Имя слишком короткое")
        .max(14, "Имя слишком длинное"),
      email: Yup.string()
        .email("Не валидная почта")
        .required("Поле Eimail обязательно"),
      password: Yup.string()
        .required("Пароль обязателен")
        .min(6, "Пароль слишком короткий")
        .max(14, "Пароль слишком длинный"),
    }),
  },
};
