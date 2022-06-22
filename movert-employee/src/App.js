import React from 'react'
import './App.css'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
