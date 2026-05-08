import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./modules/grocery/pages/Home";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./modules/auth/pages/AuthPage";
import ForgotPasswordPage from "./modules/auth/pages/ForgotPassword";
import ResetPasswordPage from "./modules/auth/pages/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/register",
    element: <AuthPage />,

  },
  {
  path: "/forgot-password",
  element: <ForgotPasswordPage />,
},

{
  path: "/reset-password",
  element: <ResetPasswordPage />,
},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;