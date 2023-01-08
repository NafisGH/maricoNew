import styled from "styled-components";

const StyledMain = styled.div`
max-width: 1640px;
margin: 0 auto;


h1 {
    text-align: center;
    font-size: 75px;
    margin-bottom: 123px;

}
ul {
    display: grid;
    /* justify-content: center; */
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1000px;
    gap: 20px 76px;
}

@media (max-width: 1670px) {
    margin: 0 50px;
        ul {
        gap: 20px 15px;
        }
       
}

@media (max-width: 1580px) {
    max-width: 1000px;
    margin: 0 auto;
    ul {
        grid-template-columns: repeat(2, 1fr);
    }
    h1 {
            font-size: 55px;
        }
}

@media (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
   
    ul {
        grid-template-columns: repeat(1, 1fr);
    }
    h1 {
            font-size: 40px;
        }
}







`

export default StyledMain;