import styled from "styled-components";

const StyledMainHomePage = styled.div`

.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 128px;
}

.heading__text-own {
    font-size: 112px;
}

.heading__text-gradient {
    font-size: 112px;
    background: linear-gradient(90deg, #FE6783 1.9%, #FFBF84 97.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.button-heading-counter {
    margin: auto;
    margin-top: 120px;
    width: 640px;
    height: 306px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.heading-text {
    text-align: center;
}

.button-heading-counter__heading-text {
    font-size: 40px;
}

.button-heading-counter__buttons {
    margin-top: 40px;
}
.buttons__get_started_now {
    width: 250px;
    height: 77px;
    border-radius: 10px;
    margin-right: 28px;
    background-color: #326CF9;
    font-size: 20px;
}

.buttons__view_a_demo {
    width: 250px;
    height: 77px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: black;
    color: gray;
    font-size: 20px;
}

.button-heading-counter__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 21px;
}

.counter__numer-counter {
    margin-right: 10px;
}

.counter__text {
    color: gray;
}

.heading-why_creators_love_marico {
    margin-top: 188px;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.why_creators_love_marico {
    font-size: 75px;
}

.reduced-lower-more {
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 64px;
    max-width: 1483px;
}

.reduced-anxiety__heading,
.lower-workload__heading,
.more-time__heading {
    font-size: 35px;

}
.reduced-anxiety__text,
.lower-workload__text,
.more-time__text {
    font-size: 22px;
    color: #707070;
}

.reduced-anxiety__emoji-heading, 
.lower-workload__emoji-heading,
.more-time__emoji-heading {
    display: flex;
    justify-content: center;
}

.smile {
    margin-right: 8px;
}
`

export default StyledMainHomePage;