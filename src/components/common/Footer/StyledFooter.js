import styled from "styled-components";

const StyledFooter = styled.div`
    max-width: 1641px;
    margin: 0 auto;
    margin-top: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 96px;


div {

    div{
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

div {

    a {
        font-size: 28px;
        color: #707070;
        text-decoration: none;

        :hover {
                    border-bottom: 2px solid blue;
                 }
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
    color: #326CF9;
}
`

export default StyledFooter;