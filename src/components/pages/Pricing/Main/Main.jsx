import React from 'react'
import StyledMain from './StyledMain'
import Tarif from '../Tarif/Tarif'
import { dataTarif } from '../../../../utils/dataTarif'
import LogoGetStartedNow from '../../../common/LogoGetStartedNow'

export default function Main() {
  return (
    <StyledMain>

    <h1>Choose the plan that's right for you.</h1>
        <ul>
            {dataTarif.map((item) => {
                return (
                    <Tarif 
                    key={item.id}
                    dataArrayPlans={item} />
                )
             })}
        </ul>
        
        <LogoGetStartedNow/>

    </StyledMain>
  )
}
