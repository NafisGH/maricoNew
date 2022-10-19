import React from "react";
import StyledStep from "./StyledStep";


export default function Step({data}) {

    return (
        <StyledStep>
           <div className="step">
               <p className="step__number">STEP {data.numberStep}</p>
               <h3 className="title">{data.titel}</h3>
               <p className="subtitle">{data.subtitle}</p>
               
           </div>
        </StyledStep>
        
    )
}