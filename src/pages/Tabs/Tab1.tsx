import { IonContent, IonPage, IonSlides, IonSlide, IonImg } from '@ionic/react';
import './Tab1.css';

import kabi from './imgs/kabi.jpg'

const slideOpts = {
  initialSlide: 0,
  speed: 1000,
  autoplay:true,
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className='home-page'>
        <div className="home">
          <div className="home-title">
            活動頁面分頁1
          </div>
          <IonSlides pager={true} options={slideOpts} className='home-slides'>
            <IonSlide className='home-slide'>
              <IonImg className='home-img' src={kabi} />
              <div className='home-slide-title' >拍賣大明星</div>
            </IonSlide>
            <IonSlide className='home-slide'>
              <IonImg className='home-img' src={kabi} />
              <div className='home-slide-title' >BACK TO SCHOOL</div>
            </IonSlide>
            <IonSlide className='home-slide'>
              <IonImg className='home-img' src={kabi} />
              <div className='home-slide-title' >金秋獎</div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
