import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import LoginPage from "../../features/login/LoginPage";
import Dashboard from "../../features/dashboard/Dashboard";
import UserDetails from "../../features/users/userDetails/UserDetails";




export const routes: RouteObject[] = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'users/:userId',
          element: <UserDetails/>,
        }
      ],
    },
  ];

export const router = createBrowserRouter(routes);