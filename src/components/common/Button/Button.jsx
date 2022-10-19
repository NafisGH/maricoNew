import React, { Children } from 'react'
import "./Button.css"



export default function Button(
    {
        children,
        classBtn,
    }
) {
  return (
    <button className={classBtn}>
        {children} 
       
    </button>
  )
}
