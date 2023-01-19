import React from "react";
import StyledMain from "./StyledMain";
import { dataSign } from "../../../../utils/dataSign";
import MyForm from "../MyForm/MyForm";
import { SignSocialNetwork } from "../../../../utils/SignSocialNetwork";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

export default function Main({
  type,
  onSubmit,
}) {
  return (
    <StyledMain>
      <div className="signUp">
        <h1>{dataSign[type].title}</h1>
        <p>{dataSign[type].subtitle}</p>
      </div>

      <MyForm 
        type={type}
        onSubmit={onSubmit}
      />

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
    </StyledMain>
  );
}
