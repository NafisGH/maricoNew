import styled from "styled-components";

const StyledFooter = styled.div`
margin-top: 184px;
display: flex;
justify-content: space-between;
align-items: center;

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

    li:not(:nth-child(2)) {
        font-size: 28px;
        color: #707070;
    }

    li:nth-child(2) {
        font-size: 28px;
        color: #326DF9;
    }

    ul {
        display: flex;
        li {
            margin-left: 45px;
        }
    }
}
`

export default StyledFooter;