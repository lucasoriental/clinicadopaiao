import React from "react";
import alertSign from "../../../assets/img/alert_sign.png";

const errorDev = () => {
  return (
    <div className="container-geral" style={{ marginBottom: "90px" }}>
      <div style={{ textAlign: "center" }}>
        <img
          src={alertSign}
          className="alert_sign"
          alt="Alert Sign"
          style={{
            display: "inline-block",
            height: "300px",
            width: "300px",
            marginBottom: "25px",
          }}
        />
      </div>
      <p className="errorText">
        Oops, desculpe! Estamos a trabalhar no desenvolvimento desta página!
      </p>
      <p className="errorText">Continue a explorar as outras secções!</p>
    </div>
  );
};

export default errorDev;
