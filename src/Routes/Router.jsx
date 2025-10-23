import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Components/Home/Homepage";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import ToyDetails from "../Pages/ToyDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/toy/:id",
        element: (
          <ProtectedRoute>
            <ToyDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
