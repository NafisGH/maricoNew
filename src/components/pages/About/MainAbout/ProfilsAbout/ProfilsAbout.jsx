import React from 'react'
import StyledProfilsAbout from './StyledProfilsAbout'


export default function ProfilsAbout({dataPofil}) {
  return (
    <StyledProfilsAbout>
        
            <img className='fotoProfil' src={dataPofil.pathFoto} alt='foto'/>
            <h2>{dataPofil.name}</h2>
            <p>{dataPofil.profession}</p>
            <div className='twitter'>
                <h3>{dataPofil.socialNetwork}</h3>
                <img className='arrow' src={dataPofil.pathArrow} alt='arrow'/>
            </div>
           
        
    </StyledProfilsAbout>
  )
}
