import styled from "styled-components";


const StyledHeader = styled.div`
background: #111131;
width: 100vw;
left: 0;
position: fixed;
z-index: 4;



.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1640px;
  width: 100vw;
  padding: 10px 0;
  margin: 0 auto;

}
  
  
  .burger-menu {
    .content {
        height: 100vh;
        width: 200px;
        background-color: #161414;
        position: fixed;
        top: 0;
        right: 0;
        transform: translateX(200px);
        z-index: 2;
        transition-duration: 0.5s ;

          &.active-burger-menu {
            transform: translateX(0px);
            /* background-color: #161414; */
            width: 70vw;
            height: 100vh;
          }
        
      }

     .open, .close {
      width: 32px;
      height: 32px;
      background: none;
      border: none;

        & > svg {
          width: 100%;
          height: 100%;
          fill: white;
          /* margin-right: 15px; */
        }
    
  }
    
  }
  
  nav {
    ul {
      display: flex;
      align-items: center;
      height: 100%;

        a:not(:last-child) {
          margin-right: 39px;
        }

      a {
        font-size: 20px;
        color: #707070;
        text-decoration: none;
        & {
          position: relative;
        }
      }
        a::after {
          content: '';
          position: absolute;
          left: 0px; 
          bottom: -5px;
          width: 0px;
          height: 1.5px;
          background-color: blue;
          transition: width 0.35s;
        }

        a:hover:after {
          width: 100%;
        }
    }
  }

  div {
    padding: 12px 22px;
  }

  .active {
    cursor: default;
    color: #326cf9;
  }

  // 1920 1440 1024 768 425 375 320

  @media (max-width: 1440px) {

    .content-header {
      padding: 8px 0;
    }
    nav > ul > a {
      font-size: 18px;
    }
    .login,
    .sign {
    font-size: 17px;
  }
    .sign {
      width: 100px;
      height: 55px;
    }
  }

  @media (max-width: 1024px) {
    .content-header {
      padding: 5px 0;
    }
    nav > ul > a {
      font-size: 16px;
    }
    .login,
    .sign {
    font-size: 15px;
  }
    .sign {
      width: 90px;
      height: 45px;
    }
  }

 
  
@media (max-width: 768px) {
  nav {
    display: flex;
    justify-content: center;
    margin-top: 30vh;
  }
  nav ul {
    display: flex;
    flex-direction: column;
    & a {
      font-size: 23px;
    }
  }
  /* nav ul a {
    margin: 0;
  } */
  nav ul a:not(:last-child) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .burger-menu-login-signin {
    margin-top: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    .login {
    font-size: 20px;
    margin: 0;
    margin-bottom: 40px;
    width: 150px;
    height: 55px;
    border-radius: 30px;
    background-color: #707070;
    color: #fff;
    }
    .login:hover::after {
  width: 0;
  }
    .sign {
    font-size: 20px;
    width: 150px;
    height: 55px;
    border-radius: 30px;
    }
}
  
`;

export default StyledHeader;
