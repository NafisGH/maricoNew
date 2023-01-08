import React from 'react'
import Button from '../../../common/Button/Button'
import StyledStepContent from './StyledStepContent'

export default function StepContent({ propsStepContent }) {
     return (
          <StyledStepContent>
               <div className='StepContent'>
                    <p className='title'>{propsStepContent.title}</p>
                    <p className='text_your'>{propsStepContent.text_your}</p>
                    <div className='text_all_one'>
                         <p className='text_all'>{propsStepContent.text_all} <span> {propsStepContent.text_one}</span></p>

                    </div>
                    <ul>
                         <li className='liOne'>
                              <div className='one'>1</div>
                              <p className='option_1'>{propsStepContent.option_1}</p>
                         </li>
                         <li>
                              <div className='two'>2</div>
                              <p className='option_2'>{propsStepContent.option_2}</p>
                         </li>
                    </ul>
                    <Button classBtn="Primary">Get Started Now</Button>
                    <Button classBtn="Secondary">View A Demo</Button>

               </div>
               <div className="blockFoto">
                    <div className='foto'>{propsStepContent.foto}</div>
                    <div className='fotoShape'>{propsStepContent.fotoShape}</div>
               </div>
              

          </StyledStepContent>
     )
}
