import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import SVGFacebook from "../../../assets/icons/SVGFacebook";
import SVGInstagram from "../../../assets/icons/SVGInstagram";

function Contactos() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div>
      <div id="contactos" className="container-geral">
        <p className="titulos-geral">Contactos</p>
        <div className="container-contactos-informacoes">
          <div>
            <p className="contactos-titulos">Localização</p>
            <p className="contactos-informacoes">
              Rua Doutor Teixeira Dias, nº 47
            </p>
            <p className="contactos-informacoes">3090-453, Paião</p>
          </div>
          <div>
            <p className="contactos-titulos">Horário</p>
            <div>
              <p className="contactos-informacoes">Segunda - Sábado</p>
              <p className="contactos-informacoes">8h00 - 20h00</p>
              <p style={{ fontSize: "13px", fontWeight: "bold " }}>
                (mediante a marcação)
              </p>
            </div>
          </div>
          <div>
            <p className="contactos-titulos">Contactos</p>
            <div>
              <p className="contactos-informacoes">233 940 116</p>
              <p className="contactos-informacoes">clinicadopaiao@outlook.pt</p>
              <div style={{ margin: "5px 0 0 5px" }}>
                <a
                  href="https://www.instagram.com/clinicadopaiao"
                  target="_blank"
                >
                  <SVGInstagram />
                </a>
                <a
                  href="https://www.facebook.com/clinicadopaiao"
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <SVGFacebook />
                </a>
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
              <Marker
                position={{ lat: 40.068747323631456, lng: -8.806737943192413 }}
              />
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contactos;
