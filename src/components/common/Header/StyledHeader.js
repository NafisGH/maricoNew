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

  /* @media (max-width: 820px) {
    margin: 0 25px;
  } */

  
  .burger-menu {
    .content {
        height: 100vh;
        width: 200px;
        background-color: red;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(200px);

        &.active-burger-menu {
          transform: translate(0px);
          background-color: blue;
        }
      }

    button {
      width: 32px;
      height: 32px;
      background: none;
      border: none;

        & > svg {
          width: 100%;
          height: 100%;
          fill: white;
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

  .login {
    font-size: 20px;
    color: #707070;
    background: none;
    margin-right: 24px;
  }
  .sign {
    background: #306ef7;
    font-size: 20px;
    width: 119px;
    height: 55px;
    border-radius: 10px;
    border: 1px solid #306ef7;
    color: white;
  }

  .active {
    cursor: default;
    color: #326cf9;
  }

  .login {
    cursor: pointer;
    :hover {
      border-bottom: 1px solid #326cf9;
    }
  }
  .sign {
    cursor: pointer;
    :hover {
      opacity: 0.3;
    }
  }
`;

export default StyledHeader;
