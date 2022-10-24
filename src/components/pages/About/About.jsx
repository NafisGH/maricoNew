import React from 'react'
import StyledAbout from './StyledAbout'
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import LogGetStartedNow from '../../common/LogoGetStartedNow'
import MainAbout from '../About/MainAbout'

export default function About() {
  return (
    <StyledAbout>
        <Header/>
        <MainAbout/>
        <LogGetStartedNow/>
        <Footer/>

    </StyledAbout>
  )
}
