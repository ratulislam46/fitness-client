import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from '../Root/RootLayout'
import Home from "../Pages/Home/Home/Home";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import DashboardLayout from '../RootLayout/DashboardLayout'
import DashboardHome from '../Pages/Dashboard/DashboardHome/DashboardHome'
import BeATrainer from "../Pages/BeATrainer/BeATrainer";
import AllNewsLetter from "../Pages/Dashboard/AllNewsLetter/AllNewsLetter";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import TrainerApplied from "../Pages/Dashboard/TrainerApplied/TrainerApplied";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'all-trainer',
                Component: AllTrainer
            },
            {
                path: 'be-a-trainer',
                Component: BeATrainer
            }
        ]
    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'register',
        Component: Register
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: 'newsletter-subscribers',
                Component: AllNewsLetter
            },
            {
                path: 'trainer-applied',
                Component: TrainerApplied
            }
        ]
    }

]);