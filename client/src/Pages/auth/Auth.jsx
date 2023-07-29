import React from 'react'
import { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Auth = () => {
    const [showLogin, setShowLogin] = useState(false)
  return (
    
    <>

        {
            showLogin && <Register setShowLogin={setShowLogin}/>
        }
        {
            !showLogin && <Login setShowLogin={setShowLogin}/>
        }
    
    </>
  )
}

export default Auth