import React, { useState, useContext } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonToolbar, IonButton, IonThumbnail, IonImg } from '@ionic/react';
import { BsFacebook } from 'react-icons/bs';
import { IoCallSharp } from 'react-icons/io5';
import './Login.css';

import { UserContext } from "../../App";

import logo from './logo.png'


const Login: React.FC = () => {
  // const [userName, setUserName] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const user = useContext(UserContext);

  const loginClick = () => {
    //Login Function
    // setBusy(true);
    // if (userName === "a" && password === "a") {
    user.setIsLoggedIn(true);
    // } else {
    // }
    // setBusy(false);
  };


  return (
    <IonPage>

      <IonContent fullscreen className='login-page' >
        <div className='login-img-container'>
          <IonImg className='login-img' src={logo} />
        </div>
        <div className='login-button-container'>
          <IonButton className='login-button' routerLink="/tabs/tab1" onClick={loginClick}  >
            <BsFacebook className='fb-icon' />
            使用facebook登入
          </IonButton>
          <br />
          <IonButton className='login-button' routerLink="/register"  >
          <IoCallSharp className='call-icon'/>
            使用手機號碼登入
          </IonButton>
        </div>
        <hr className='login-hr' />

      </IonContent>

    </IonPage>
  );
};

export default Login;