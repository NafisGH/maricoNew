import React from "react";
import StyledMyForm from "./StyledMyForm";
import { Formik, Form, Field } from "formik";
import CustomInputMyForm from "./CustomInputMyForm/CustomInputMyForm";
import Button from '../../Button/Button'
import { dataSign } from "../../../../utils/dataSign";

export default function MyForm({
  type,
  onSubmit,
}) {
  return (
    <StyledMyForm>
      <Formik
        initialValues={dataSign[type].initialValues}
        validationSchema={dataSign[type].validationSchema}
        onSubmit={(values)=> { onSubmit(values) }}
        validateOnMount={true}
      >
        {(formik) => {
          return (
            <Form className="form"
            noValidate
            >
            {dataSign[type].inputs.map((item)=> {
              return <Field 
                isValid={false}
                name={item.name}
                component={CustomInputMyForm}
                placeholder={item.placeholder}
                type={item.type}
                key={item.id}
                touched={formik.touched}
                errors={formik.errors}
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
