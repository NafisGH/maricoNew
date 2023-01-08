import styled from "styled-components";

const StyledSlidersLib = styled.div`
   max-width: 125.5rem;
  margin: 0 auto;


  .slick-list {
    height: 370px;

  }

  .slick-track {
     /* max-width: 900px; */
    height: 100%; 
    display: flex;
    align-items: center;
  }

  .slick-slide {
    background-color: #306ef7;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 4rem;
    }

    & > div {
      width: 100%;
      height: 100%;
    }
  }

  .slick-arrow {
    width: 4rem;
    height: 4rem;

    &::before {
      width: 4rem;
      height: 4rem;
    }
  }
  .slick-next::before,
  .slick-prev::before {
    width: 4rem;
    height: 4rem;
    font-size: 4rem;
  }

  .slick-prev {
    left: -5rem;
  }

  .slick-next {
    right: -5rem;
  } 
`;

export default StyledSlidersLib;