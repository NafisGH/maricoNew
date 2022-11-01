import styled from "styled-components";

const StyledCustomInputMyForm = styled.div`
position: relative;
margin-bottom: 80px;
padding-bottom: 15px;



  input {
    border: none;
    width: 100%;
    background: none;
    font-size: 23px;
    padding-right: 50px;
    color: #ffffff;
    line-height: 34px;
    outline: none;
  }

  &:last-of-type {
    margin-bottom: 63px;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    bottom: -2px;
    left: 0;
  }

  
`;

export default StyledCustomInputMyForm;
