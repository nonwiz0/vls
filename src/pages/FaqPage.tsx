import React, { useContext } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./styles/components.css";
import { useHistory } from "react-router";
import { turnOffModal } from "../model";

const FaqPage: React.FC<turnOffModal> = ({ turnOffModal }) => {
  const history = useHistory();

  return (
    <>
      
      <IonContent color="light" fullscreen>
        <IonSlides>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <br /> <br />
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="150 px" src="/assets/media/faq.svg" />
                </div>{" "}
                <br />
                <IonCardSubtitle className="centerText">
                  Information
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Learn More</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  <div className="ion-text-center">
                    Swipe Left or Swipe Right
                  </div>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="150 px" src="/assets/media/personalData.svg" />
                </div>
                <IonCardSubtitle className="centerText">
                  What about
                </IonCardSubtitle>
                <IonCardTitle className="centerText">
                  Privacy Policy
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonText>
                  <div className="ion-text-center">
                    VLS does not make use of any collected data
                  </div>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <br />
              <br />
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="150 px" src="/assets/media/contactUs.svg" />
                </div>{" "}
                <IonCardSubtitle className="centerText">
                  Contact Us
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Email</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    bdchanbroset@gmail.com <br /> andreas.christian.m@gmail.com
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="150 px" src="/assets/media/react.svg" />
                </div>
                <IonCardSubtitle className="centerText">
                  Developed with
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Ionic React</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    <a href="https://ionicframework.com/docs">
                      Ionic Framework
                    </a>
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="150 px" src="/assets/media/openSource.svg" />
                </div>{" "}
                <IonCardSubtitle className="centerText">
                  Source Code?
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Open Source</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <br />
                <IonText>
                  <div className="ion-text-center">
                    Get started with <br /> gh repo clone chanrose/vls
                  </div>
                </IonText>
                <br />
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
        <IonButton fill="clear" expand="full" onClick={turnOffModal}>
          CLOSE
        </IonButton>
      </IonContent>
    </>
  );
};

export default FaqPage;
