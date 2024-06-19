import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import LoginPage from "../../components/login/LoginPage";
import Dashboard from "../../components/dashboard/Dashboard";



export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path:'login', element: <LoginPage/>
            },
            {
                path:'dashboard', element:<Dashboard/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes);