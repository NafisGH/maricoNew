import React, { Children } from 'react'
import "./Button.css"



export default function Button(
    {
        children,
        classBtn,
        handleClick,
    }
) {
  return (
    <button className={classBtn} onClick={handleClick}>
        {children} 

    </button>
  )
}
