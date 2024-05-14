import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ErrorDev from "./components/common/errors/errorDev.jsx";
import Header from "./components/common/header/header.jsx";
import ClinicaDoPaiao from "./components/seccoes/clinicaDoPaiao/clinicadopaiao.jsx";
import Contacto from "./components/seccoes/contactos/contactos.jsx";
import NossaEquipa from "./components/seccoes/nossaEquipa/nossaEquipa.jsx";
import ClinicaGeral from "./components/seccoes/servicos/cadaServico/clinicaGeral.jsx";
import Fisioterapia from "./components/seccoes/servicos/cadaServico/fisioterapia.jsx";
import Ortopedia from "./components/seccoes/servicos/cadaServico/ortopedia.jsx";
import Psicologia from "./components/seccoes/servicos/cadaServico/psicologia.jsx";
import Servicos from "./components/seccoes/servicos/servicos.jsx";
import Sobre from "./components/seccoes/sobre/sobre.jsx";
import Acupuntura from "./components/seccoes/servicos/cadaServico/acupuntura.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ClinicaDoPaiao />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="nossaEquipa" element={<NossaEquipa />} />
          <Route path="contacto" element={<Contacto />} />
          {/* Adicionar aqui em baixo as rotas para cada serviço, 
          assim como está sendo feito no <ClinicaGeral> */}
          <Route path="*" element={<ErrorDev />} />
          <Route path="clinicaGeral" element={<ClinicaGeral />} />
          <Route path="psicologia" element={<Psicologia />} />
          <Route path="acupuntura" element={<Acupuntura />} />
          <Route path="fisioterapia" element={<Fisioterapia />} />
          <Route path="ortopedia" element={<Ortopedia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
