import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Games from "../pages/Games";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import PrivetRoute from "../privateRoute/PrivetRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/games",
        element: (
          <PrivetRoute>
            <Games />
          </PrivetRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <MyProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <UpdateProfile/>
          </PrivetRoute>
        ),
      },
    ],
  },
]);