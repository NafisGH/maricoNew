import React from "react";
import StyledMyForm from "./StyledMyForm";
import { Formik, Form, Field } from "formik";
import CustomInputMyForm from "./CustomInputMyForm/CustomInputMyForm";
import Button from '../../Button/Button'

export default function MyForm() {
  return (
    <StyledMyForm>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={() => {}}
      >
        {(formik) => {
          return (
            <Form className="form">
              <Field 
                name='username'
                component={CustomInputMyForm}
                placeholder='Username'
              />
              <Field 
                name='email'
                component={CustomInputMyForm}
                placeholder='E-mail'
              />
              <Field 
                name='password'
                component={CustomInputMyForm}
                placeholder='Password'
              />

              
              <Button classBtn='Sign' type="summit">Sign Up</Button>
            </Form>
          );
        }}
      </Formik>
    </StyledMyForm>
  );
}
