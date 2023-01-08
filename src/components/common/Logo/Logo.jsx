import React from 'react'
import StyledLogo from './StyledLogo'
import pathLogo from "../../../icons/logo.svg"
import { useNavigate } from 'react-router-dom'

export default function Logo() {

    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate("../")
    }
  return (
    <StyledLogo onClick={handleHomePage}>
         <img src={pathLogo} alt="иконка логотипа"/>
         <p>Marico</p>
    </StyledLogo>
  )
}
