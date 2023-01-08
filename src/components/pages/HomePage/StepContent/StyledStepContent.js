import styled from "styled-components";

const StyledStepContent = styled.div`

max-width: 1640px;
margin: 0 auto;
display: flex;
justify-content: space-between ;


li {
    display: flex ;
    align-items: center ;

}
.option_1, .option_2 {
    margin-left: 15px ;


}

.one, .two {
    display: flex ;
    justify-content: center ;
    align-items: center ;
    width: 30px;
    height: 30px;
    background-color: gray;
    border-radius: 50%;
}
.liOne {
    margin-bottom: 13px;
}

.title {
    font-size: 30px;
    font-family: 'Poppins';
    text-align: start ;
    margin-bottom: 80px;
}

.text_your {
    font-size: 75px;
    text-align: start ;
    
}

.text_all_one {
    display: flex;
    margin-bottom: 29px;
    
}
.text_all {
    font-size: 75px;
    margin-right: 10px ;
}

span {
    font-size: 75px;
    color: #3C82F4;
}

.blockFoto {
  position: relative;
  margin-bottom: 71px;
}
.foto {
    position: relative;
    z-index: 1;
}

.fotoShape {
    position: absolute;
    z-index: -1;
    left: 350px;
    bottom: -100px;
}

Button {
    margin-top: 66px;
    width: 207px;
    height: 65px;
    font-size: 20px;
}

`

export default StyledStepContent;