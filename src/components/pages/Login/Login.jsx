import React from "react";
import { useNavigate } from "react-router-dom";
import { onSignIn } from "../../../firebase/api";
import Header from "../../common/Header";
import Main from "../../common/Sign/Main/Main";

import StyledLogin from "./StyledLogin";

export default function Login() {

  const navigation = useNavigate();

  const handleSubmit = async (values) => {
    console.log('values ----->', values)
    const user = await onSignIn(values);
    if(!user) {
      console.log('Возникли ошибки !!!') 
    } else {
      navigation('/')
    }
  }

  return (
    <StyledLogin>
      <Header />
      <Main
        type="in"
        onSubmit={handleSubmit}
        />
    </StyledLogin>
  );
}
