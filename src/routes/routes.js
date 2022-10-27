import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Main from "../Layout/Main";
import Blog from "../pages/Blog";
import CheckOut from "../pages/CheckOut";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import ErrorPage from "../pages/ErrorPage";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://batter-explanation-server.vercel.app/categories"),
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://batter-explanation-server.vercel.app/categories/${params.id}`
          ),
        element: <CourseDetails />,
      },
      {
        path: "/checkOut",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
