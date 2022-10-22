import React from "react";
import Mobile from "../../../../img/Mobile.jpg";
import StyledStep2 from "./StyledStep2";
import Button from "../../../common/Button/Button";

export default function Step2() {
    return (
        <StyledStep2>

           <ul>
                    <div className="one_link_box">
                        <div className="one_link_content">
                            <p className="oneGreen">One Link</p>
                            <p className="all">ALL You Create.</p>
                            <br />
                            <p className="one">One Link</p>
                            <img src={Mobile} alt="foto mobile"></img>
                        </div>
                    </div>
                    
                    <div className="collect_box">
                        <div className="collect_content">
                            <p className="collect_green">Collect Subscribers</p>
                            <p className="emails">Emails.</p>
                            <p className="phone">Phone #s.</p>
                            <p className="all_yours">All Yours.</p>
                        </div>
                    </div>

           </ul>
                    <ul>
                        <Button classBtn="Primary">Get Started </Button>
                    </ul>
                   
        </StyledStep2>
    );
}
