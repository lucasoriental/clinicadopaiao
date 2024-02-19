import React from "react";
import "./App.css";
import Footer from "./components/common/footer/footer.jsx";
import Header from "./components/common/header/header.jsx";
import ClinicaDoPaiao from "./components/seccoes/clinicaDoPaiao/clinicadopaiao.jsx";
import Contactos from "./components/seccoes/contactos/contactos.jsx";
import NossaEquipa from "./components/seccoes/nossaEquipa/nossaEquipa.jsx";
import Servicos from "./components/seccoes/servicos/servicos.jsx";
import Sobre from "./components/seccoes/sobre/sobre.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <ClinicaDoPaiao></ClinicaDoPaiao>
      <Sobre></Sobre>
      <Servicos></Servicos>
      <NossaEquipa></NossaEquipa>
      <Contactos></Contactos>
      <Footer></Footer>
    </div>
  );
}

export default App;
