import styled from "styled-components";

const StyledFooter = styled.div`
  max-width: 1641px;
  margin: 0 auto;
  margin-top: 184px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 96px;

  .logo-footer {
    margin-left: 20px;
    div {
      display: flex;
      align-items: flex-end;
      img {
        width: 47.18px;
        height: 52.38px;
      }
      h3 {
        font-size: 32px;
        margin-left: 24px;
      }
    }
    p {
      font-size: 27px;
      color: #707070;
    }
  }

  .footer-nav {
    margin-right: 20px;
    a {
      font-size: 28px;
      color: #707070;
      text-decoration: none;
      position: relative;
    }
    a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 2px;
        background-color: blue;
        transition: 0.3s;
    }
    a:hover:after {
        width: 100%;
    }

    ul {
      display: flex;
      a {
        margin-left: 45px;
      }
    }
  }
  .active {
    cursor: default;
    color: #326cf9;
  }

  // Адаптив !!!

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 46px;
    .logo-footer {
      margin-left: 15px;
      div {
        img {
          width: 37.18px;
          height: 42.38px;
        }
        h3 {
          font-size: 22px;
          margin-left: 14px;
        }
      }
      p {
        font-size: 17px;
      }
    }
  }

  .footer-nav {
    margin-right: 15px;
    a {
      font-size: 19px;
    }

    ul {
      a {
        margin-left: 12px;
      }
    }
  }

  @media (max-width: 425px) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;
  }

  @media (max-width: 375px) {
    margin-top: 20px;
    margin-bottom: 16px;
  }
  .footer-nav {
    margin-top: 10px;
  }
`;

export default StyledFooter;
