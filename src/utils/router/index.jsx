import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../../pages/Home/index.jsx';
import { Marketplace } from '../../pages/Marketplace/index.jsx';
import { MarketplaceLendario } from '../../pages/MarketplaceLendario/index.jsx';
import ErrorPage from '../../pages/Error/index.jsx';
import { Cart } from './../../pages/Cart/index';
import {SignUp} from '../../pages/SignUp/index.jsx';
import {Login} from '../../pages/Login/index.jsx';


export const router = createBrowserRouter([
  {
    path: "/register",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
    errorElement: <ErrorPage />
  },
  {
    path: "/marketplace/lendarias",
    element: <MarketplaceLendario />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
    errorElement: <ErrorPage />
  }
]);