import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import StyledHeader from "./StyledHeader";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";

const Header = () => {
  const navigate = useNavigate();
  const handleSignUp = () => navigate("/Sign");
  const handleLogin = () => navigate("/Login");

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const width = useWindowWidth();

  useEffect(() => {
    if (width < 769) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [width]);

  const handleClickButtonBurger = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <StyledHeader>
      <Logo />

      {isVisible ? (
        <div className="burger-menu">
          <Button classBtn="open" handleClick={handleClickButtonBurger}>
            <BiMenu />
          </Button>
          <div
            className={`content ${isVisibleMenu ? "active-burger-menu" : ""}`}
          >
            <Button classBtn="close" handleClick={handleClickButtonBurger}>
              <AiOutlineClose />
            </Button>
            <nav> {/* Навигация Header burger menu */}
              <ul>
                <NavLink
                  to="../use case"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Use Cases
                </NavLink>

                <NavLink
                  to="../about"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="../pricing"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Pricing
                </NavLink>

                <NavLink
                  to="../blog"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Blog
                </NavLink>
              </ul>
            </nav>
            <div className="burger-menu-logins-ignin">
              <Button handleClick={handleLogin} classBtn="login">
                Login
              </Button>
              <Button handleClick={handleSignUp} classBtn="sign">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>

          <nav> {/* Навигация Header */}
            <ul>
              <NavLink
                to="../use case"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Use Cases
              </NavLink>

              <NavLink
                to="../about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </NavLink>

              <NavLink
                to="../pricing"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Pricing
              </NavLink>

              <NavLink
                to="../blog"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Blog
              </NavLink>
            </ul>
          </nav>
          <div>
            <Button handleClick={handleLogin} classBtn="login">
              Login
            </Button>
            <Button handleClick={handleSignUp} classBtn="sign">
              Sign Up
            </Button>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
