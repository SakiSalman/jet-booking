import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { GET_ALL_PORTS } from '../Redux/Airports/portType'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUSers } from '../Redux/auth/authActions'
import Cookies from 'js-cookie'

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
  }, [dispatch])


  useEffect(() => {


    try {
      const token = Cookies.get('access_token')
      axios.get('http://localhost:5000/api/v1/user/me', {
        headers : {
          Authorization : `Bearer `
        }
      }).then(res => {
          console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }

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