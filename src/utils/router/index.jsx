import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../../pages/Home/index.jsx';
import { Marketplace } from '../../pages/Marketplace/index.jsx';
import ErrorPage from '../../pages/Error/index.jsx';
import { Cart } from './../../pages/Cart/index';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/marketplace/lendarias",
    element: <Marketplace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
    errorElement: <ErrorPage />
  }
]);