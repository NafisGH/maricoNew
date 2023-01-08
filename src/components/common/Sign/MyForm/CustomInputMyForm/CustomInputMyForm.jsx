import React from "react";
import StyledCustomInputMyForm from "./StyledCustomInputMyForm";
import { ErrorMessage } from "formik";

export default function CustomInputMyForm({ field, ...props }) {
 
  return (
    <StyledCustomInputMyForm
      className={`${
        field.name && props.touched[field.name] && props.errors[field.name]
          ? "error"
          : ""
      }`}
    >
      <input
        {...field}
        {...props}
        id={field.name}
        type={props.type}
        placeholder={props.placeholder}
        {...field}
        autoComplete={props.type === "password" ? "off" : "on"}
      />
      <ErrorMessage name={field.name} component="span" className="error" />
      <label></label>
    </StyledCustomInputMyForm>
  );
}
