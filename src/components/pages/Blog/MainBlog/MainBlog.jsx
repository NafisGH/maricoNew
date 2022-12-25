import React from "react";
import StyledMainBlog from "./StyledMainBlog";
import { dataBlog } from "../../../../utils/dataBlog";
import Sliders from "../../../common/Sliders/Sliders";
import { SlidersLib } from "../../../common/SlidersLib/SlidersLib";
import ContentSocialNetwork from "./ContentSocialNetwork"

export default function MainBlog() {
  return (
    <StyledMainBlog>
      <div className="text">
        <h1>Content Sources</h1>
        <p>Connect these sources to your Marico homepage.</p>
      </div>
      {/* <ul>
          {dataBlog.map((item) => {
            return <ContentSocialNetwork key={item.id} blogProps={item} />;
          })}
        </ul> */}
      <SlidersLib blogProps={dataBlog} />
    </StyledMainBlog>
  );
}
