import React from "react";
import StyledMainBlog from "./StyledMainBlog";
import Audience from "../../../common/Audience/Audience";
import LogoGetStartedNow from "../../../common/LogoGetStartedNow";
import ContentSocialNetwork from "./ContentSocialNetwork/ContentSocialNetwork";
import { dataBlog } from "../../../../utils/dataBlog";

export default function MainBlog() {
  return (
    <StyledMainBlog>
      <div>
        <div>
          <h1>Content Sources</h1>
          <p>Connect these sources to your Marico homepage.</p>
        </div>
        <ul>
          {dataBlog.map((item) => {
            return <ContentSocialNetwork key={item.id} blogProps={item} />;
          })}
        </ul>
      </div>

      <Audience />
      <LogoGetStartedNow />
    </StyledMainBlog>
  );
}
