import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import "../styles/GettingStartedPage.css";
import { add, bicycle, car, easel, ticket } from "ionicons/icons";
import AdminGuestSeg from "../../components/admin/AdminGuestSeg";
import AdminHomeSeg from "../../components/admin/AdminHomeSeg";
import { useAuth } from "../../auth";
import { firestore } from "../../firebase";
import { orgList, toEntry } from "../../model";

const AdminHomePage: React.FC = () => {
  const { userId } = useAuth();
  const [selectedHome, setHome] = useState(true);
  const [selectedGuest, setGuest] = useState(
    false
  ); /* 
  const [selectedTools, setTools] = useState(false); */
  const [orgDetail, setOrg] = useState<orgList>();
  const [selectedSeg, setSeg] = useState("home");

  useEffect(() => {
    firestore
      .collection("users")
      .doc(userId)
      .collection("detail")
      .doc(userId)
      .get()
      .then((doc) => {
        setOrg(toEntry(doc));
      });
  }, [userId]);

  const returnSegment = (selectedSegment: string) => {
    if (selectedSegment === "guest") {
      setGuest(true);
      setHome(false); /* 
      setTools(false); */
      setSeg("guest");
    } /* else if (selectedSegment === "tools") {
      setGuest(false);
      setHome(false);
      setTools(true);
      setSeg("tool");
    } */ else if (
      selectedSegment === "home"
    ) {
      setGuest(false);
      setHome(true); /* 
      setTools(false); */
      setSeg("home");
    }
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonSegment
            value={selectedSeg}
            onIonChange={(e) => returnSegment(e.detail.value!)}
          >
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="guest">
              <IonLabel>Guest's Post</IonLabel>
            </IonSegmentButton>
            {/* <IonSegmentButton value="tools">
              <IonLabel>Admin tools</IonLabel>
            </IonSegmentButton> */}
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        {selectedGuest && <AdminGuestSeg />}
        {selectedHome && <AdminHomeSeg />}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton routerLink={"/admin/addnew/Motorbike"}>
              <IonIcon icon={bicycle} />
            </IonFabButton>
            <IonFabButton routerLink={"/admin/addnew/Car"}>
              <IonIcon icon={car} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={ticket} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={easel} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default AdminHomePage;
