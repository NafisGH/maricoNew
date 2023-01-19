import React from "react";
import { useNavigate } from "react-router-dom";
import { onSignUp } from "../../../firebase/api";
import Header from "../../common/Header";
import Main from "../../common/Sign/Main/Main";

import StyledSignup from "./StyledSignup";


  



export default function Signup() {

  const navigation = useNavigate();

  const handleSubmit = async (values) => {
    console.log('values ----->', values)
    const user = await onSignUp(values);
    if(!user) {
      console.log('Возникли ошибки !!!') 
    } else {
      navigation('/Login')
    }
  }

  return (
    <StyledSignup>
      <Header />
      <Main 
      type='up'
      onSubmit={handleSubmit}

      />
    </StyledSignup>
  );
}
