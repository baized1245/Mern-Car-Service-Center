import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import CheckOut from '../pages/CheckOut/CheckOut'
import Bookings from '../pages/Bookings/Bookings'
import PrivateRoute from './PrivateRoute'
import AboutPage from '../pages/AboutPage/AboutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mern-car-service-center.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
