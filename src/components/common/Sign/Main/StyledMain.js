import styled from "styled-components";



const StyledMain = styled.div`
  .signUp {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 78px;

    h1 {
      font-size: 75px;
      line-height: 112px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
    }
  }

  ul {
    display: grid;
    box-sizing: border-box;
    place-items: center;
    grid-template-columns: repeat(3, 470px);
    gap: 78px;
    justify-content: center;
  }

  .orText {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 46px;
    h1 {
      font-size: 54px;
      line-height: 81px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
    }
  }

  .accountText {
    font-size: 16px;
line-height: 24px;
text-align: center;
margin-top: 69px;
  }
`;
export default StyledMain;
