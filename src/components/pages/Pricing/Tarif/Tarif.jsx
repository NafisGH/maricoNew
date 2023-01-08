import React from 'react'
import StyledTarif from './StyledTarif'
import check from "../../../../icons/checkMark.svg"
import Button from '../../../common/Button/Button'


export default function Tarif({dataArrayPlans}) {
console.log(dataArrayPlans)
  return (
    <StyledTarif className={`${dataArrayPlans.id === 3 ? 'activeblue': ''}`}>
       

            
            <div>
                <h3>{dataArrayPlans.tarif}</h3>
                <p className='starerSubtitle'>{dataArrayPlans.starerSubtitle}</p>
                <div className='wraper'>
                    <h2>{dataArrayPlans.price} {dataArrayPlans.priceSub && <span className='permonth'>{dataArrayPlans.priceSub}</span>}</h2>
                    {dataArrayPlans.priceSubtitle && <p className='priceSubtitle'>{dataArrayPlans.priceSubtitle}</p>}
                </div>
                


                <h4>{dataArrayPlans.title}</h4>
                <p className='subscribers'>{dataArrayPlans.subscribers}</p>

            </div>
                <p className='subscribersSubtitle'>{dataArrayPlans.subscribersSubtitle}</p>
            

            <div>
                <h5>{dataArrayPlans.planFeature}</h5>
                <p className='feature1'><img src={check} alt="check"/>{dataArrayPlans.feature1}</p>
                <p className='feature2'><img src={check} alt="check"/>{dataArrayPlans.feature2}</p>

            </div>
                
            <Button classBtn='Third'>{dataArrayPlans.classBtn}</Button>

            
        
       
    
    </StyledTarif>
  )
}
