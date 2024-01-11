import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import LogIn from '../Components/LogIn'; 
import Register from '../Components/Register'; 
import Main from '../Layout/Main';
import PrivateRoute from '../Private/PrivateRoute';

const Router = () => {

    const router = createBrowserRouter([
        {
            path : '/',
            element: <Main></Main>,
            children :[
                {
                    path : '/home',
                    element : <PrivateRoute><Home></Home></PrivateRoute>
                },
                {
                    path : '/login',
                    element : <LogIn></LogIn>
                },
                {
                    path : '/register',
                    element : <Register></Register>
                }
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};

export default Router;