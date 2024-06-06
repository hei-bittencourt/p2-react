import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../../pages/Home/index.jsx';
import { Marketplace } from '../../pages/Marketplace/index.jsx';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/marketplace/lendarias",
      element: <Marketplace />
    }
  ]);