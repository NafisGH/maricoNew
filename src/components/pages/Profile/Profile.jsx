import React from 'react';
import Button from '../../common/Button/Button';
import Header from '../../common/Header';


import StyledProfile from './StyledProfile';

export const Profile = () => {
  return (
    <StyledProfile>
        <Header/>
        <div className="profile">
        <div className='profile_foto'>
            <img src="https://kartinkin.net/uploads/posts/2022-02/thumbs/1645764528_2-kartinkin-net-p-na-profil-kartinki-2.jpg" alt="" srcset="" />
        </div>

        <div className='data-users'>
            <p>Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <Button classBtn={'signout'}>Sign out</Button>

        </div>
        </div>
        
    </StyledProfile>
  )
}