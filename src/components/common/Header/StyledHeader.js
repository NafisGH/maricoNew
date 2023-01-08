import styled from "styled-components";

const StyledHeader = styled.div`
  max-width: 1640px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  margin-top: 46px;
  margin-bottom: 128px;
  
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
          :hover {
            border-bottom: 2px solid blue;
          }
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

  @media (max-width: 1024px) {
    nav > ul > a {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
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
  .burger-menu-logins-ignin {
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
    .sign {
    font-size: 20px;
    width: 150px;
    height: 55px;
    border-radius: 30px;
    }
}
  
`;

export default StyledHeader;
