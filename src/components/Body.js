import React from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login';
import Table from './Table';
import RandomPage from './RandomPage';


const Body = () => {
  

    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/table",
            element:<Table/>
        },
        {
          path:"/random",
          element:<RandomPage/>
      }
    ]);



  return (
  <>
    <RouterProvider router={approuter}/>
    </>
  )
}

export default Body;