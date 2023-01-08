import React from "react";
import StyledSignup from "./StyledSignup";
import Header from "../../common/Header";
import Main from "../../common/Sign/Main/Main";

export default function Signup() {
  return (
    <StyledSignup>
      <Header />
      <Main type='up'/>
    </StyledSignup>
  );
}
