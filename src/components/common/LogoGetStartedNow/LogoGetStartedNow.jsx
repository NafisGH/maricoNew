import React from "react";
import logo from "../../../icons/logo.svg";
import StyledLogoGetStartedNow from "./StyledLogoGetStartedNow";
import Button from "../Button/Button";
import img_dot from "../../../icons/Dot.svg";

export default function LogoGetStartedNow() {
  return (
    <StyledLogoGetStartedNow>
    <div>
      <div className="logotip">
         <img className="foto_logo" src={logo} alt="foto logo"></img>
      </div>
    
           <h2>Get Started Now</h2>
           <p>Setup is easy and takes under 5 minutes.</p>

      <div className="logotip-primary">
         <Button classBtn="Primary">Get Started Now</Button>
      </div>
      
      <div className="logotip-dot">
        <div>
          <img className="dot" src={img_dot} alt="dot"></img>
        </div>
        
        <div className="dotTextNumbers">
           <p className="dotText"> 1000 + creators have already started</p>
        </div>
      </div>
    </div>
    </StyledLogoGetStartedNow>
  );
}
