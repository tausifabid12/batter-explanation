import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../pages/CheckOut";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
        element: <CourseDetails />,
      },
      {
        path: "/checkOut",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/logIn",
        element: <LogInPage></LogInPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
]);
