import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
 

  return (
    <div>
      <h1>Resorts Lite</h1>
    <div className='container'>
     
     <Card image = 'src/assets/1.jpg'location ='Indonesia' price ='589' name='Gili Air Hotel' rating ={4.8} />

     <Card image = 'src/assets/2.jpg'location ='Seychelles' price ='629' name='Hilton Resort' rating ={4.8} />

     <Card image = 'src/assets/3.jpg'location ='US Virgin Island' price ='485' name='Goa Resort' rating ={3.5} />

     <Card image = 'src/assets/4.jpg'location ='Bahamas' price ='729' name='Kuredu Resort' rating ={4.5} />

     <Card image = 'src/assets/5.jpg'location ='Mauritius' price ='877' name="Trou D'eau Douce" rating ={4.9} />

     <Card image = 'src/assets/6.jpg'location ='Bermuda' price ='365' name='Staniel Cay Hotel' rating ={3.2} />
    </div>
    </div>
  )
}

export default App
