import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Head from './Pages/Head'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Head></Head>

      <Home></Home>
      
    
    </div>

  )
}

export default App
