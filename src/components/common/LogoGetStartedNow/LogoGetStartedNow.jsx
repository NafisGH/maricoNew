import React from "react";
import logo from "../../../icons/logo.svg";
import StyledLogoGetStartedNow from "./StyledLogoGetStartedNow";
import Button from "../Button/Button";
import img_dot from "../../../icons/Dot.svg";

export default function LogoGetStartedNow() {
  return (
    <StyledLogoGetStartedNow>
    <div>
      <div>
         <img src={logo} alt="foto logo"></img>
      </div>
    
           <h2>Get Started Now</h2>
           <p>Setup is easy and takes under 5 minutes.</p>

      <div>
         <Button classBtn="Primary">Get Started Now</Button>
      </div>
      
      <div>
        <div>
          <img className="dot" src={img_dot} alt="dot"></img>
        </div>
        
        <div>
          1000+<p>creators have already started</p>
        </div>
      </div>
    </div>
    </StyledLogoGetStartedNow>
  );
}
