import styled from "styled-components";

const StyledMainBlog = styled.div`

div {
    max-width: 1255px;
    margin: 0 auto;
    margin-bottom: 188px;



    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 130px;

     h1 {
        font-size: 120px;
        line-height: 180px;
        color: #FFFFFF;

        }

     p {
        font-size: 30px;
        line-height: 45px;
        color: #FFFFFF;
        margin-top: -10px;
     }
    }

    ul {
        box-sizing: border-box;
        display: grid;
        place-items: center;
        gap: 23px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
        
     li {
        border: 1px solid gray;
        border-radius: 15px;
     }
    }
}

`

export default StyledMainBlog;