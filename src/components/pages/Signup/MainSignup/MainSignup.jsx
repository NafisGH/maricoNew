import React from "react";
import StyledMainSignup from "./StyledMainSignup";
import MyForm from "../../../common/Sign/MyForm/MyForm";
import { dataSign } from "../../../../utils/dataSign";
import SocialNetwork from "../../../common/Sign/SocialNetwork/SocialNetwork";
import { SignSocialNetwork } from "../../../../utils/SignSocialNetwork";

export default function MainSignup({ type }) {
  return (
    <StyledMainSignup>
      <div className="signUp">
        <h1>{dataSign[type].title}</h1>
        <p>{dataSign[type].subtitle}</p>
      </div>

      <MyForm />

      <div className="orText">
        <h1>{dataSign[type].textOr}</h1>
        <p>{dataSign[type].subTextOr}</p>
      </div>

      <ul>
        {SignSocialNetwork.map((elem) => {
          return <SocialNetwork signData={elem} />;
        })}
      </ul>

      <p className="accountText">{dataSign[type].accountText}</p>
    </StyledMainSignup>
  );
}
