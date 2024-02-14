import React from 'react'
import MyFooter from './components/common/footer/footer.jsx'
import MyHeader from './components/common/header/header.jsx'
import ClinicaDoPaiao from './components/clinicaDoPaiao/clinicadopaiao.jsx'
import './App.css'

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      <ClinicaDoPaiao></ClinicaDoPaiao>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
