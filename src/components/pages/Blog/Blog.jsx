import React from 'react'
import StyledBlog from './StyledBlog'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import MainBlog from './MainBlog'


export default function Blog() {
  return (
    <StyledBlog>
        <Header/>
        <MainBlog/>
        <Footer/>
    </StyledBlog>
  )
}
