import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layouts/Layout";
import Login from "../components/Admin/Auth/Login";
import Register from "../components/Admin/Auth/Register";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import AdminDash from "../components/Admin/Dashboard/Components/AdminDash";
import Users from "../features/users/Users";
import Bookings from "../features/Bookings/Bookings";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : '/',
                element : <AdminDash></AdminDash>
            },
            {
                path : 'user',
                element : <Users></Users>
            },
            {
                path : 'bookings',
                element : <Bookings></Bookings>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]
    }
])


export default router