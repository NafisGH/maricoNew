import React from 'react'
import StyledSocialNetwork from './StyledSocialNetwork'

export default function SocialNetwork({signData}) {
  return (
    <StyledSocialNetwork>
 
     <img src={signData.pathLogo} alt='Logo'></img>
     <p>{signData.title}</p>
   
   
    </StyledSocialNetwork>
  )
}
