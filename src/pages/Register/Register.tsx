import React, { useState } from 'react';
import { IonContent, IonItem, IonPage, IonLabel, IonInput, IonButton, IonThumbnail, IonImg } from '@ionic/react';
import { IoIosArrowBack } from 'react-icons/io';


import './Register.css';

import logo from './logo192.png'


const Register: React.FC = () => {
  // const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  const back =()=>{
    window.history.back()
  }

  return (
    <IonPage>
      <IonContent fullscreen className='register-page' >
        <button className='back-button' onClick={back}>
          <IoIosArrowBack className='arrow-icon' />
        </button>
        <div className='content'>
          <span style={{ color: 'black', fontSize: '50px' }}>
            我的號碼是
          </span>
          <input className='phone-input'></input>
          <br />
          <button className="verify-button" >
            發送驗證碼
          </button>
          <input className='verify-input'></input>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;