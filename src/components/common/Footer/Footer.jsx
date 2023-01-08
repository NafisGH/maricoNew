import React from 'react'
import Logo from '../../../icons/logo.svg'
import StyledFooter from './StyledFooter'
import { NavLink } from 'react-router-dom'

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
                <NavLink to='about'
                className={({isActive})=> isActive ? 'active' : undefined}
                >About</NavLink>

                <NavLink to='pricing'
                className={({isActive})=> isActive ? 'active' : undefined}
                >Pricing</NavLink>

                <NavLink to='blog'
                className={({isActive})=> isActive ? 'active' : undefined}
                >Blog</NavLink>

                <NavLink to='sign in'
                className={({isActive})=> isActive ? 'active' : undefined}
                >Sign in</NavLink>

            </ul>
          </div>

         
    </StyledFooter>
    
  )
}
