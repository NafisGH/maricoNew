import React from 'react'
import StyledMain from './StyledMain'
import Tarif from '../Tarif/Tarif'
import { dataTarif } from '../../../../utils/dataTarif'
import LogoGetStartedNow from '../../../common/LogoGetStartedNow'

export default function Main() {
  return (
    <StyledMain>
        <ul>
            {dataTarif.map((item, index) => {
                return (
                    <Tarif 
                    // key={item.id}
                    dataArrayPlans={item} />
                )
             })}
        </ul>
        
        <LogoGetStartedNow/>

    </StyledMain>
  )
}
