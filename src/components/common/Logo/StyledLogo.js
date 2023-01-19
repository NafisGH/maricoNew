import styled from "styled-components";

const StyledLogo = styled.div`

        display: flex;
        align-items:center;

        cursor: pointer;
        & {
            position: relative;
        }
        &::after {
            content: '';
            position: absolute;
            left: 0px;
            bottom: -5px;
            width: 0px;
            height: 2.5px;
            background-color: blue;
            transition: all 0.35s linear;
        }
        &:hover::after {
            width: 100%;
            /* border-bottom: 1px solid #326CF9; */
        }
        img {
            margin-right: 17px;
        }

        p {
            font-size: 37px;
        }
     
        @media (max-width: 1440px) {
            img {
                width: 40px;
                height: 32px;
            }
            p {
                font-size: 35px;
            }
        }

        @media (max-width: 1024px) {
            img {
                width: 37px;
                height: 29px;
            }
            p {
                font-size: 28px;
            }
        }
`

export default StyledLogo;