import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Calendar from './pages/Calendar/Calendar';
import AddBooking from './pages/AddBooking/AddBooking';
import LayoutWithSideBar from './layouts/LayoutWithSideBar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <LayoutWithSideBar></LayoutWithSideBar>,
        children: [
          {
            path: "/",
            element: <Calendar></Calendar>,
            loader: () => fetch('https://www.gov.uk/bank-holidays.json?ref=public_apis&utm_medium=website')
          },
          {
            path: "/add-booking",
            element: <AddBooking></AddBooking>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
