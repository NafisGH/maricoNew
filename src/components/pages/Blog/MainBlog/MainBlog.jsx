import React from "react";
import StyledMainBlog from "./StyledMainBlog";
import { dataBlog } from "../../../../utils/dataBlog";
import Sliders from "../../../common/Sliders/Sliders";


export default function MainBlog() {
  return (
    <StyledMainBlog>
      
        <div>
          <h1>Content Sources</h1>
          <p>Connect these sources to your Marico homepage.</p>
        </div>
        {/* <ul>
          {dataBlog.map((item) => {
            return <ContentSocialNetwork key={item.id} blogProps={item} />;
          })}
        </ul> */}
        <Sliders blogProps={dataBlog}/>
       

        


      

      
    </StyledMainBlog>
  );
}
