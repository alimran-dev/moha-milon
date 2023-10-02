import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Orders from "../components/Orders";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <div>This is home test</div>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/registration',
                element: <SignUp/>,
            },
            {
                path: '/orders',
                element: <PrivateRoutes><Orders/></PrivateRoutes>,
            }
        ]
    }
])

export default router;