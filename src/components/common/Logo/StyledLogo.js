import styled from "styled-components";

const StyledLogo = styled.div`

        display: flex;
        align-items:center;

        cursor: pointer;
        :hover {
            border-bottom: 1px solid #326CF9;
        }
        img {
            margin-right: 17px;
        }

        p {
            font-size: 37px;
        }
     
        @media (max-width: 1024px) {
            img {
                width: 40px;
                height: 37px;
            }
            p {
                font-size: 28px;
            }
        }
`

export default StyledLogo;