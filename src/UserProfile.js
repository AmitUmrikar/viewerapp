import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Avatar} from '@material-ui/core';
import style from './UserProfile.module.css';

const UserProfile = () =>{
    const {user} = useAuth0();
    const {picture} = user;

    return(
        <Avatar className={style.ProfileImg} alt="profile img" src={picture}/>
    );
}

export default UserProfile;