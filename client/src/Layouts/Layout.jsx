import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { GET_ALL_PORTS } from '../Redux/Airports/portType'
import axios from 'axios'
import { useDispatch } from 'react-redux'


const Layout = () => {
  const dispatch = useDispatch()
  useEffect( () => {
   axios.get('/airports.json')
  .then( res => {
    
    dispatch({type : GET_ALL_PORTS, payload : res.data})
    
  })
  .catch(err => {
    console.log(err);
  })
  }, [])
  
  return (
    <>

        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    
    
    </>
  )
}

export default Layout