import React from 'react'
import StyledCustomInputMyForm from './StyledCustomInputMyForm'

export default function CustomInputMyForm({field, ...props}) {
console.log(field, props)
  return (
    <StyledCustomInputMyForm>
    
        <input {...props} />
        <label></label>
    </StyledCustomInputMyForm>
  )
}
