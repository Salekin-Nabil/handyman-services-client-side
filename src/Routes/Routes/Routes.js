import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Reviews from "../../Pages/Reviews/Reviews";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import RequireAuth from "../../Pages/Login/RequireAuth";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";
import MyHistory from "../../Pages/Dashboard/MyHistory/MyHistory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/appointment',
                element: <RequireAuth><Appointment></Appointment></RequireAuth>
            },
            {
                path: '/dashboard',
                element: <RequireAuth>
                    <Dashboard></Dashboard>
                    </RequireAuth>,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyAppointment></MyAppointment>
                    },
                    {
                        path: '/dashboard/my_reviews',
                        element: <MyReviews></MyReviews>
                    },
                    {
                        path: '/dashboard/my_history',
                        element: <MyHistory></MyHistory>
                    },
                    // {
                    //     path: '/dashboard/allusers',
                    //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                    // },
                    // {
                    //     path: '/dashboard/adddoctor',
                    //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
                    // },
                    // {
                    //     path: '/dashboard/managedoctors',
                    //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
                    // },
                    // {
                    //     path: '/dashboard/payment/:id',
                    //     element: <Payment></Payment>,
                    //     loader: ({params}) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
                    // },
                ]
            }
        ]
    }
])

export default router;