import React from "react";
import StyledSignup from "./StyledSignup";
import Header from "../../common/Header";
import MainSignup from "./MainSignup";

export default function Signup() {
  return (
    <StyledSignup>
      <Header />
      <MainSignup type='up'/>
    </StyledSignup>
  );
}
