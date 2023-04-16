import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home';
import Experience from './Pages/Home/Experience/Experience';
import Charter from './Pages/Charter/Charter';
import Shuttle from './Pages/Shuttle/Shuttle';
import Deals from './Pages/Home/Deals/Deals';
import Membership from './Pages/Membership/Membership';

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
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
