import styled from "styled-components";

const StyledProfile = styled.div`
  .profile {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .profile {
    .profile_foto {
      img {
        border: 2px solid gray;
        border-radius: 50%;
        width: 300px;
        height: 300px;
      }
    }
  }

  .profile {
    .data-users {
      p {
        font-size: 30px;
        margin-bottom: 15px;
      }
    }
  }
`;
export default StyledProfile;
