import React from 'react'
import StyledLogin from './StyledLogin'
import Header from '../../common/Header'
import Main from '../../common/Sign/Main/Main'


export default function Login() {
  return (
    <StyledLogin>
        <Header/>
        <Main type='in'/>
    </StyledLogin>
  )
}
