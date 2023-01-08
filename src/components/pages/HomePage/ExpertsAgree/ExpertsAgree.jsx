import React from 'react'
import StyledExpertsAgree from "./StyledExpertsAgree"
import ExpertsAgreeFoto from "../../../../img/Experts_Agree.png"

export default function ExpertsAgree() {
  return (
    <StyledExpertsAgree>
        <h2 className='experts'>
        Experts Agree
        </h2>
        <img src={ExpertsAgreeFoto} alt='ExpertsAgreeFoto'></img>
    </StyledExpertsAgree>
  )
}
