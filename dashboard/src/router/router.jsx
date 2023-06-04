import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layouts/Layout";
import Login from "../components/Admin/Auth/Login";
import Register from "../components/Admin/Auth/Register";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import AdminDash from "../components/Admin/Dashboard/Components/AdminDash";


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
                path : 'register',
                element : <Register></Register>
            }
        ]
    }
])


export default router