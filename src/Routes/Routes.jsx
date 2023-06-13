import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

 
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'instructors',
            element: <Instructors></Instructors>
        },
        {
            path: 'classes',
            element: <Classes></Classes>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'mySelectedClasses',
          element: <MySelectedClasses></MySelectedClasses>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
  }
  ]);