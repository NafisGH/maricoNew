import styled from "styled-components";

const LogoGetStartedNow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 188px;

  .logotip {
    display: flex;
    justify-content: center;
    .foto_logo {
      width: 165px;
      height: 155px;
      margin-bottom: 21px;
      margin: 0 auto;
    }
  }

  h2 {
    font-size: 100px;
  }
  p {
    font-size: 43px;
    text-align: center;
  }

  .logotip-primary {
    display: flex;
    justify-content: center;
    Button {
      margin-bottom: 26px;
      width: 472px;
      height: 102px;
    }
  }

  .logotip-dot {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;

      div {
        font-size: 38px;
        p {
          margin-left: 11px;
          font-size: 38px;
          color: #707070;
        }
      }
    }
  }

  .dot {
    width: 37px;
    height: 37px;
    margin-right: 22px;
    align-self: center;
  }

  @media (max-width: 1085px) {
    margin-top: 150px;

    .logotip .foto_logo {
      width: 145px;
      height: 135px;
    }
  }
  h2 {
    font-size: 60px;
    text-align: center;
  }
  p {
    font-size: 35px;
  }
  .dotTextNumbers,
  .dotText {
    font-size: 22px;
  }
  .foto_logo {
    width: 100px;
    height: 90px;
  }

  @media (max-width: 768px) {
    margin-top: 90px;

    .logotip {
      .foto_logo {
        width: 123px;
        height: 113px;
      }
    }
    .logotip-primary {
      Button {
        font-size: 29px;
        width: 354px;
        height: 76px;
      }
    }

    h2 {
      font-size: 50px;
      text-align: center;
    }
    p {
      font-size: 25px;
    }
  }
  @media (max-width: 500px) {
    .logotip-primary {
      Button {
        font-size: 26px;
        width: 330px;
        height: 70px;
      }
    }
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 425px) {
    .logotip {
      .foto_logo {
        width: 103px;
        height: 93px;
      }
    }

    .dot {
            width: 28px;
             height: 28px;
             margin-right: 8px;
        }
    .logotip-primary {
      Button {
        font-size: 22px;
        width: 300px;
        height: 60px;
      }
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
    }
    .logotip-dot {
        
        
      p {
        font-size: 17px;
      }
    }
  }

  @media (max-width: 320px) {
    .logotip {
      .foto_logo {
        width: 90px;
        height: 80px;
      }
    }

.dot {
        width: 20px;
         height: 20px;
         margin-right: 6px;
    }
.logotip-primary {
  Button {
    font-size: 15px;
    width: 200px;
    height: 50px;
  }
}
h2 {
  font-size: 27px;
}
p {
  font-size: 15px;
}
.logotip-dot {
    
    
  p {
    font-size: 16px;
  }
}
}
`;
export default LogoGetStartedNow;
