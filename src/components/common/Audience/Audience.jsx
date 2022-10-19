import React from "react";
import AudienceFoto from "../../../img/Audience.jpg";
import StyledAudience from "./StyledAudience";

export default function Audience() {
  return (
    <StyledAudience>
    <div className="fotoImg">
       <img  src={AudienceFoto} alt="AudienceFoto"></img>
    </div>
      <div className="span">
      <span>We've helped over 1,000 creatorsre</span>
          <br />
        <span>claim control of their audience.</span>
      </div>
        
    </StyledAudience>
  );
}
