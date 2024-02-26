import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/header.jsx";
import ClinicaDoPaiao from "./components/seccoes/clinicaDoPaiao/clinicadopaiao.jsx";
import Contacto from "./components/seccoes/contactos/contactos.jsx";
import NossaEquipa from "./components/seccoes/nossaEquipa/nossaEquipa.jsx";
import Servicos from "./components/seccoes/servicos/servicos.jsx";
import Sobre from "./components/seccoes/sobre/sobre.jsx";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
