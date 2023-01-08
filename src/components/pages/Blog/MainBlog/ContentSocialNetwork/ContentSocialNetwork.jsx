import React from "react";
import StyledContentSocialNetwork from "./StyledContentSocialNetwork";

export default function ContentSocialNetwork({ blogProps }) {
  return (
    <StyledContentSocialNetwork>
      <img src={blogProps.pathImg} alt="Logo"></img>
      <h3>{blogProps.socialNetwork}</h3>
      <p>{blogProps.description}</p>
      {/* {blogProps.soon ? <p>{blogProps.soon}</p> : ""} */}
      {blogProps.soon && (
        <div>
          <p>{blogProps.soon}</p>
        </div>
      )}
    </StyledContentSocialNetwork>
  );
}
