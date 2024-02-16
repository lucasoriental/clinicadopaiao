import React from 'react'
import './App.css'
import MyFooter from './components/common/footer/footer.jsx'
import MyHeader from './components/common/header/header.jsx'
import NossaEquipa from './components/nossaEquipa/nossaEquipa.jsx'
import MyServicos from './components/servicos/servicos.jsx'
import MyContactos from './components/contactos/contactos.jsx'

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      {/* <ClinicaDoPaiao></ClinicaDoPaiao> */}
      {/* <MySobre></MySobre> */}
      {/* <MyServicos></MyServicos> */}
      {/* <NossaEquipa></NossaEquipa> */}
      {/* <MyContactos></MyContactos> */}
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
