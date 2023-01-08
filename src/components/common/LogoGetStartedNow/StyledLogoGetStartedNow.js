
import styled from "styled-components";

const LogoGetStartedNow = styled.div`
display: flex;
justify-content: center;
margin-top: 188px;

div {
    img {
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
    margin-bottom: 15px;
    text-align: center;
}

Button {
    margin-bottom: 26px;
    width: 472px;
    height: 102px;

}

div {
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
}

@media (max-width: 700px) {
    h2 {
        font-size: 55px;
        text-align: center;
    }
    p {
        font-size: 30px;
    }
    img {
        width: 80px;
        height: 75px;
    }
}




`
export default LogoGetStartedNow;