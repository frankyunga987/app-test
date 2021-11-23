import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, peopleOutline, addCircleOutline , search ,notificationsOutline} from 'ionicons/icons';
import Tab1 from '../Tabs/Tab1';
import Tab2 from '../Tabs/Tab2';
import Tab3 from '../Tabs/Tab3';
import Tab4 from '../Tabs/Tab4';
import Tab5 from '../Tabs/Tab5';

import './MainTabs.css'

const MainTabs: React.FC = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabs/tab1" render={() => <Tab1 />} exact={true} />
          <Route path="/tabs/tab2" render={() => <Tab2 />} exact={true} />
          <Route path="/tabs/tab3" render={() => <Tab3 />} exact={true} />
          <Route path="/tabs/tab4" render={() => <Tab4 />} exact={true} />
          <Route path="/tabs/tab5" render={() => <Tab5 />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="tab-bar">
          <IonTabButton tab="tab1" href="/tabs/tab1" className="tab-button">
            <IonIcon icon={homeOutline} />
            <IonLabel>Tab1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tabs/tab2" className="tab-button">
            <IonIcon icon={search} />
            <IonLabel>Tab2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/tab3" className="tab-button">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Tab3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tabs/tab4" className="tab-button">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Tab3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tabs/tab5" className="tab-button">
            <IonIcon icon={peopleOutline} />
            <IonLabel>Tab3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  };
  
  export default MainTabs;