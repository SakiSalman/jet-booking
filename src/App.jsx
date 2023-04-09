import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Head from './Pages/Head'
import Banner from './Pages/Home/Banner'


function App() {





  return (
    <div className="App">
    <Head></Head>
    <Banner></Banner>
    <Home></Home>
    </div>

  )
}

export default App
