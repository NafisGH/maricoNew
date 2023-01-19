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
  .starer {
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
    margin-bottom: 53px;
  }

  .img {
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

  // Адаптив !!!!!!!!

  @media (max-width: 768px) {
    /* max-height: 900px; */
    max-width: 500px;
    margin: 0 20px;

    .starer {
    h3 {
      font-size: 37px;
      line-height: 56px;
    }
    .starerSubtitle {
      font-size: 21px;
      line-height: 31px;
    }
    h2 {
      font-size: 51px;
      line-height: 78px;
    }
    .priceSubtitle {
      font-size: 21px;
      line-height: 31px;
    }

    h4 {
      margin-top: 10px;
      font-size: 23px;
      line-height: 30px;
      margin-bottom: 6px;
    }

    .subscribers {
      font-size: 21px;
      line-height: 30px;
      margin-bottom: 30px;
    }
  }

  .img {
    h5 {
      font-size: 25px;
      line-height: 31px;
    }
    .feature1 {
      margin-top: 20px;
      font-size: 18px;
      line-height: 29px;
    }
    .feature2 {
      margin-top: 20px;
      font-size: 18px;
      line-height: 29px;
    }
  }
  }

  @media (max-width: 425px) {

    .starer {
    h3 {
      font-size: 31px;
      line-height: 49px;
    }
    .starerSubtitle {
      font-size: 18px;
      line-height: 28px;
    }
    h2 {
      font-size: 45px;
      line-height: 72px;
    }
    .priceSubtitle {
      font-size: 18px;
      line-height: 28px;
    }

    h4 {
      margin-top: 8px;
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 4px;
    }

    .subscribers {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }

  .img {
    h5 {
      font-size: 22px;
      line-height: 31px;
    }
    .feature1 {
      margin-top: 18px;
      font-size: 16px;
      line-height: 23px;
    }
    .feature2 {
      margin-top: 18px;
      font-size: 16px;
      line-height: 23px;
    }
  }
  }
`;

export default StyledTarif;
