import styled from "styled-components";

const StyledCustomInputMyForm = styled.div`
position: relative;
margin-bottom: 80px;
padding-bottom: 15px;

.error {
  position: absolute;
  bottom: -40px;
  content: '';
  font-weight: 400px;
  font-size: 16px;
  line-height: 34px;
  left: 0;
  color: red;
}

&.error {
  &::after {
    background-color: red;
  }
}

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
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px #000 inset;
    -webkit-text-fill-color: #88c9ce;
  }
  
`;

export default StyledCustomInputMyForm;
