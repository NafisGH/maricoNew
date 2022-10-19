import React from 'react'
import Logo from '../../../icons/logo.svg'
import StyledFooter from './StyledFooter'

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <div>
            <img src={Logo} alt='Logo'></img>
            <h3>Marico</h3>
        </div>
        <p>info@marico.co</p>
      </div>
      <div>
        <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Sign in</li>
        </ul>
      </div>
    </StyledFooter>
    
  )
}
