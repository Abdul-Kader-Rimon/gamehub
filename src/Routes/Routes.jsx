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
import GameDetails from "../pages/GameDetails";
import OurTeam from "../pages/OurTeam";
import OurMission from "../pages/OurMission";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/game.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        children: [
          {
            path: "our-team",
            element: <OurTeam/>
          },
          {
            path: "our-mission",
            element: <OurMission/>
          },
        ]
      },
      {
        path: "/games",
        element: (
          <PrivetRoute>
            <Games />
          </PrivetRoute>
        ),
        loader: () => fetch("/game.json")
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
            <UpdateProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "/games/:id",
        element: (
          <PrivetRoute>
            <GameDetails />
          </PrivetRoute>
        ),
        loader: () => fetch("/game.json"),
      },
    ],
  },
]);