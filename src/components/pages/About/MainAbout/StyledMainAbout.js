import styled from "styled-components";

const StyledMainAbout = styled.div`
  padding-top: 140px;

  div {
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
    img {
      width: 76px;
      height: 70px;
    }
    h1 {
      font-size: 62px;
      margin-left: 25px;
    }
  }

  .our_mission {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 186px;

    h3 {
      font-size: 25px;
      color: #306ef7;
    }
    h2 {
      font-size: 75px;
      color: #ffffff;
    }
    p {
      font-size: 30px;
      color: #ffffff;
      text-align: center;
    }
  }

  .text {
    max-width: 1154px;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    p {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
  hr {
    max-width: 1252px;
    margin: 0 auto;
    opacity: 0.5;
    margin-top: 58px;
  }

  .team_heading_text {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1058px;
    margin-top: 188px;
    margin-bottom: 59px;

    h3 {
      font-size: 25px;
      color: #306ef7;
    }
    h2 {
      font-size: 75px;
    }
  }

  ul {
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    place-items: center;
    gap: 23px;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    max-width: 1058px;

    .fotoProfil {
      width: 112px;
      height: 112px;
      margin-bottom: 17px;
    }

    h2 {
      font-size: 35px;
    }

    p {
      font-size: 19px;
      color: #7f7f7f;
      margin-bottom: 21px;
    }

    .twitter {
      align-items: center;
    }

    h3 {
      font-size: 20px;
    }

    .arrow {
      width: 14.44px;
      height: 15.71px;
      margin-left: 8px;
    }

    @media (max-width: 1440px) {
        .text {
            font-size: 21px;
            p {
            margin-top: 12px;
            margin-bottom: 12px;
            }
         }
    }
  }
`;
export default StyledMainAbout;
