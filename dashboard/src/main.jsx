import React from 'react'
import ReactDOM from 'react-dom/client'
import  './assets/css/bootstrap.min.css'
import  './assets/css/feathericon.min.css'
import  './assets/css/select2.min.css'
import  './assets/css/style.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
