import styled from "styled-components";

const StyledItemSlider = styled.li`
  display: grid;
  grid-template-columns: 5rem 1100px 5rem;
  align-items: center;
  width: 100%;
  max-width: 125.5rem;
  margin: 0 auto;
  column-gap: 1rem;

  .window {
    width: 100%;
    overflow: hidden;
    margin: 0;

  }

  .arrow {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
      width: 100%;
      height: 100%;
    }
    transition: transform 0.2s linear;
    

    &:hover {
      transform: scale(0.9);
      color: blue;
    }
  }

  .box-sliders {
    display: flex;
    

    li {
      min-width: 99%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0px 20px 0px;
    }
  }
`
export default StyledItemSlider;