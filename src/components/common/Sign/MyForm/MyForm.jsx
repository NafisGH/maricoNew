import React from "react";
import StyledMyForm from "./StyledMyForm";
import { Formik, Form, Field } from "formik";
import CustomInputMyForm from "./CustomInputMyForm/CustomInputMyForm";
import Button from '../../Button/Button'
import { dataSign } from "../../../../utils/dataSign";

export default function MyForm({type}) {
  return (
    <StyledMyForm>
      <Formik
        initialValues={dataSign[type].initialValues }
        onSubmit={() => {}}
      >
        {(formik) => {
          return (
            <Form className="form">
            {dataSign[type].inputs.map((item)=> {
              return <Field 
                name={item.name}
                component={CustomInputMyForm}
                placeholder={item.placeholder}
                type={item.type}
                key={item.id}
              />
            })}
             

              
              <Button classBtn='Sign' type="summit">{type === 'in' ? 'Log in': 'Sign Up'}</Button>
            </Form>
          );
        }}
      </Formik>
    </StyledMyForm>
  );
}
