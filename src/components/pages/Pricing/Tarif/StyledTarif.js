import styled from "styled-components";

const StyledTarif = styled.div`
  /* width: 496px; */
  height: 989px;
  border: 1px solid gray;
  border-radius: 30px;
  background: #131313;
  padding: 35px;
  box-sizing: border-box;

  img {
    margin-right: 10px;
  }

  .permonth {
    font-size: 26px;
    line-height: 39px;
    color: #b4b1b1;
  }
  div {
    h3 {
      font-size: 50px;
      line-height: 75px;
      color: #ffffff;
    }
    .starerSubtitle {
      font-size: 28px;
      line-height: 42px;
      color: #b4b1b1;
    }
    h2 {
      font-size: 69px;
      line-height: 104px;
      color: #ffffff;
    }
    .priceSubtitle {
      font-size: 28px;
      line-height: 42px;
      text-decoration-line: underline;
      color: #b4b1b1;
    }

    h4 {
      margin-top: 67px;
      font-size: 27px;
      line-height: 40px;
      color: #ffffff;
      margin-bottom: 9px;
    }

    .subscribers {
      font-size: 28px;
      line-height: 42px;
      color: #ffffff;
      margin-bottom: 45px;
    }
  }

  .subscribersSubtitle {
    font-size: 24px;
    line-height: 36px;
    color: #b4b1b1;
    /* text-align: center; */
    margin-bottom: 53px;
  }

  div {
    h5 {
      font-size: 28px;
      line-height: 42px;
      color: #ffffff;
    }
    .feature1 {
      margin-top: 28px;
      font-size: 24px;
      color: #ffffff;
      line-height: 36px;
    }
    .feature2 {
      margin-top: 20px;
      font-size: 24px;
      color: #ffffff;
      line-height: 36px;
    }
  }

  Button {
    margin-top: 79px;
  }

  &.activeblue {
    background-color: #3c82f4;
    color: white;

    button {
      background-color: white;
      color: #3c82f4;
      border: none;
      border-radius: 20px;
      font-size: 27px;
    }
    .starerSubtitle,
    .priceSubtitle,
    .permonth,
    .subscribersSubtitle {
      color: white;
    }
  }

  .wraper {
    height: 160px;
  }

  button {
    font-size: 27px;
  }
`;

export default StyledTarif;
