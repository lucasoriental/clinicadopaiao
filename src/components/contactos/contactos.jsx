import React from "react";
import "./contactos.css";
//import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import SVGInstagram from "../../icons/SVGInstagram";
import SVGFacebook from "../../icons/SVGFacebook";

function Contactos() {
  /* const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDJhZUZsbfH8Gna-QQnKfHVEivv0Jtio7s"
      }) */
  return (
    <div
      style={{
        width: "1000px",
        margin: "90px auto 0px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div>
        <p id="title">Contactos</p>
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          gap: "15%",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#444444"
            }}
          >
            Localização
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5em",
              
              textAlign: "justify",
              color: "#444444",
            }}
          >
            Rua Doutor Teixeira Dias, nº 47
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5em",
              
              textAlign: "justify",
              color: "#444444",
            }}
          >
            3090-453, Paião
          </p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#444444"
            }}
          >
            Horário
          </p>
          <div>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5em",
                
                textAlign: "justify",
                color: "#444444",
              }}
            >
              Segunda - Sábado
            </p>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5em",
                
                textAlign: "justify",
                color: "#444444",
              }}
            >
              8h00 - 20h00
            </p>
            <p
              style={
                {
                  /* margin: "2% 0px 0px 15%", fontSize: "11px"  */
                }
              }
            >
              *mediante a marcação
            </p>
          </div>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#444444"
            }}
          >
            Contactos
          </p>
          <div>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5em",
                
                textAlign: "justify",
                color: "#444444",
              }}
            >
              233 940 116
            </p>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5em",
                
                textAlign: "justify",
                color: "#444444",
              }}
            >
              clinicadopaiao@outlook.pt
            </p>
            <div style={{ margin: "5px 0 0 5px" }}>
              <a href="#">
                <SVGInstagram />
              </a>
              <a href="#">
                <SVGFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="googleMaps">
        {/* {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "980px", height: "600px" }}
            center={{
              lat: 40.068747323631456,
              lng: -8.806737943192413,
            }}
            zoom={15}
          >
            <></>
          </GoogleMap>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
}

export default Contactos;
