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
import TrainerDetails from "../Pages/Dashboard/TrainerApplied/TrainerDetails";
import Trainers from "../Pages/Dashboard/Trainers/Trainers";
import ActivityLog from "../Pages/Dashboard/ActivityLog/ActivityLog";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddForm from "../Pages/Dashboard/AddForum/AddForm";
import ForumDetails from "../Pages/Home/ForumPost/ForumDetails";
import ForumPage from "../Pages/ForumsPage/ForumsPage";
import ForumPostDetails from "../Pages/ForumsPage/ForumPostDetails";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AddNewSlot from "../Pages/Dashboard/AddNewSlot/AddNewSlot";
import ManageSlot from "../Pages/Dashboard/ManageSlot/ManageSlot";
import Balance from "../Pages/Dashboard/Balance/Balance";
import BookedTrainers from "../Pages/Dashboard/BookedTrainers/BookedTrainers";
import TrainersDetails from "../Pages/AllTrainer/TrainersDetails";
import TrainerBookedPage from "../Pages/AllTrainer/TrainerBookedPage";



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
                path: 'trainers/:id',
                Component: TrainersDetails
            },
            {
                path: 'book-slot/:slotId',
                element: <PrivateRoute>
                    <TrainerBookedPage></TrainerBookedPage>
                </PrivateRoute>

            },
            {
                path: 'be-a-trainer',
                Component: BeATrainer
            },
            {
                path: 'all-forum-post',
                Component: ForumPage
            },
            {
                path: 'single-forum-details/:id',
                Component: ForumPostDetails
            },
            {
                path: 'classes',
                Component: AllClasses
            },
            {
                path: 'trainer/:id',
                Component: TrainersDetails
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
            },
            {
                path: "applied-trainers/:id",
                Component: TrainerDetails
            },
            {
                path: 'trainers',
                Component: Trainers
            },
            {
                path: 'activity-log',
                Component: ActivityLog
            },
            {
                path: 'my-profile',
                Component: MyProfile
            },
            {
                path: 'add-forum',
                Component: AddForm
            },
            {
                path: 'forum-details/:id',
                Component: ForumDetails
            },
            {
                path: 'add-class',
                Component: AddClass
            },
            {
                path: 'add-slot',
                Component: AddNewSlot
            },
            {
                path: 'manage-slots',
                Component: ManageSlot
            },
            {
                path: 'balance',
                Component: Balance
            },
            {
                path: 'booked-trainers',
                Component: BookedTrainers
            }
        ]
    }

]);