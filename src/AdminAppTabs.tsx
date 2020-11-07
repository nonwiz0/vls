import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/react';
import HomePage from './pages/HomePage';
import { addCircleOutline, home as homeIcon, listOutline, settings as settingsIcon } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import AdminHomePage from './pages/AdminHomePage';
import AdminAddPage from './pages/AdminAddPage';
/* import { useAuth } from './auth'; */

const AdminAppTabs: React.FC = () => {
/*   const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />
  }
 */
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/admin/home/" component={AdminHomePage} />
        <Route exact path="/admin/addnew/" component={AdminAddPage} />
        

      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/admin/home/">
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="addnew" href="/admin/addnew/">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Add New</IonLabel>
        </IonTabButton>
        <IonTabButton tab="listItem" href="/my/entries">
          <IonIcon icon={listOutline} />
          <IonLabel>View List</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AdminAppTabs;