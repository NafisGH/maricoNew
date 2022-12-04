import React from 'react'
import StyledItemSlider from './StyledItemSlider'

export default function ItemSlider({ blogProps }) {
  return (
    <StyledItemSlider>
<img src={blogProps.pathImg} alt="Logo"></img>
      <h3>{blogProps.socialNetwork}</h3>
      <p>{blogProps.description}</p>
      {/* {blogProps.soon ? <p>{blogProps.soon}</p> : ""} */}
      {blogProps.soon && (
        <div>
          <p>{blogProps.soon}</p>
        </div>
      )}
    </StyledItemSlider>
  )
}
