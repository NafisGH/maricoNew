import styled from "styled-components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StyledItemSlider = styled.div`
 padding: 35px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 100%;

 img {
  width: 100px;
  margin-bottom: 17px;
 }

 h3 {
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 11px;
 }

 p {
  font-weight: 400;
  font-size: 23px;
  line-height: 34px;
  color: white;
 }
`;
export default StyledItemSlider;