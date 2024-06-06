import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './src/pages/Home/index.jsx';
import { Marketplace } from './src/pages/Marketplace/index.jsx';
import ErrorPage from './src/pages/Error/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/carrinho",
  //   element: <Carrinho />,
  //   errorElement: <ErrorPage />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
