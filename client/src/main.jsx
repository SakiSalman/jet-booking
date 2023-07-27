import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layouts/Layout';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import './index.css'
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Charter from './Pages/Charter';
import Shuttle from './Pages/Shuttle';
import Deals from './Pages/Deals';
import Membership from './Pages/Membership';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/experience',
        element : <Experience></Experience>
      }
      ,
      {
        path : '/charter',
        element : <Charter></Charter>
      },
      {
        path : '/shuttle',
        element : <Shuttle></Shuttle>
      },
      {
        path : '/deals',
        element : <Deals></Deals>
      }
      ,
      {
        path : '/membership',
        element : <Membership></Membership>
      }
    ]
  },{
    path : '*',
    element : 'Page not Found'
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
