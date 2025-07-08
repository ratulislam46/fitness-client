import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from '../Root/RootLayout'
import Home from "../Pages/Home/Home/Home";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";



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
            }
        ]
    },
]);