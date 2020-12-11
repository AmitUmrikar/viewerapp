import React from 'react';
import signIn from '../../Images/signInAlert.png';
import style from './Message.module.css';

const Message = () =>{
    return(
        <div className={style.messageContainer}>
            <a href="/Login"><img className={style.signInImg} src={signIn} alt="signIn"/></a>
            Oops !! You need to login first!
        </div>
    );
}
export default Message;