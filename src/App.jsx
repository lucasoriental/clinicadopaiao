import React from 'react'
import MyFooter from './components/common/footer/footer.jsx'
import MyHeader from './components/common/header/header.jsx'
import ClinicaDoPaiao from './components/clinicaDoPaiao/clinicadopaiao.jsx'
import MySobre from './components/sobre/sobre.jsx'
import MyServicos from './components/servicos/servicos.jsx'
import './App.css'

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      {/* <ClinicaDoPaiao></ClinicaDoPaiao> */}
      {/* <MySobre></MySobre> */}
      <MyServicos></MyServicos>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
