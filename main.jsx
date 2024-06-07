import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider } from 'react-router-dom';
import { router } from './src/utils/router';
import {ProvedorCarrinho} from './src/contexts/CarrinhoContext';
import { CategoryProvider } from './src/contexts/CategoryContext';
import {UserProvider} from './src/contexts/userContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <CategoryProvider>
    <ProvedorCarrinho>
      <RouterProvider router={router} />
    </ProvedorCarrinho>
    </CategoryProvider>
  </UserProvider>
  </React.StrictMode>
)

