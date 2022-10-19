import React from "react";
import { Link } from "react-router-dom";
import StyledHeader from "./StyledHeader";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <StyledHeader>
       <Logo/>
      <nav>
        <ul>
          <li>Use Cases</li>
          <li>About</li>
          <li><Link to="../pricing">Pricing</Link></li>
          <li>Blog</li>
        </ul>
      </nav>
      <div>
        <Button classBtn="login">Login</Button>
        <Button classBtn="sign">Sign Up</Button>
      </div>
    </StyledHeader>
  );
}

export default Header;