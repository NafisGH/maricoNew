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
  },
};
