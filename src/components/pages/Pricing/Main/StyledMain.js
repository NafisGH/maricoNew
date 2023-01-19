import styled from "styled-components";

const StyledMain = styled.div`
max-width: 1640px;
margin: 0 auto;
padding-top: 140px;


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

// Адаптив !!!!!!!!

@media (max-width: 1670px) {
    margin: 0 20px;
        ul {
        gap: 20px 20px;
        }
       
}

@media (max-width: 1530px) {
    max-width: 1200px;
    margin: 0 auto;
    ul {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px 55px;
    }
    h1 {
            font-size: 55px;
        }
}

@media (max-width: 1250px) {
    margin: 0 20px;
    ul {
        gap: 20px 20px;
    }
    h1 {
            font-size: 50px;
        }
}

@media (max-width: 1024px) {
    max-width: 700px;
    margin: 0 auto;
   
    ul {
        grid-template-columns: repeat(1, 1fr);
    }
    h1 {
            font-size: 45px;
        }
}

@media (max-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
    ul {
        gap: 20px 20px;
    }
    h1 {
            font-size: 40px;
        }
}

@media (max-width: 425px) {
    h1 {
            font-size: 32px;
        }
}






`

export default StyledMain;