import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Reviews from "../../Pages/Reviews/Reviews";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import RequireAuth from "../../Pages/Login/RequireAuth";

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
            }
        ]
    }
])

export default router;