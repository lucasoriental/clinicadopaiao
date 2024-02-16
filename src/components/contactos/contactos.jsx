import React from "react";
import "./contactos.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import SVGInstagram from "../../icons/SVGInstagram";
import SVGFacebook from "../../icons/SVGFacebook";

function Contactos() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDJhZUZsbfH8Gna-QQnKfHVEivv0Jtio7s"
      })
  return (
    <div id="geral">
      <div>
        <p id="title">Contactos</p>
      </div>
      <div className="container">
        <div className="bloco">
          <p className="titulo">Localização</p>
          <p>Rua Doutor Teixeira Dias, nº 47</p>
          <p>3090-453, Paião</p>
        </div>
        <div className="bloco">
          <p className="titulo">Horário</p>
          <div className="infoDet">
            <p>Segunda - Sábado</p>
            <p>8h00 - 20h00</p>
            <p style={{ margin: "2% 0px 0px 15%", fontSize: "11px" }}>
              *mediante a marcação
            </p>
          </div>
        </div>
        <div className="bloco">
          <p className="titulo">Contactos</p>
          <div className="infoDet">
            <p>233 940 116</p>
            <p>clinicadopaiao@outlook.pt</p>
            <div className="redesSociais">
              <SVGInstagram />
              <SVGFacebook />
            </div>
          </div>
        </div>
      </div>
      <div id="googleMaps">
        {isLoaded ? (
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
        )}
      </div>
    </div>
  );
}

export default Contactos;
