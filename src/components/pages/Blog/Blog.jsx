import React from 'react'
import StyledBlog from './StyledBlog'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import MainBlog from './MainBlog'
import Audience from '../../common/Audience/Audience'
import LogoGetStartedNow from '../../common/LogoGetStartedNow'


export default function Blog() {
  return (
    <StyledBlog>
        <Header/>
        <MainBlog/>
        <Audience/>
        <LogoGetStartedNow />
        <Footer/>
    </StyledBlog>
  )
}
