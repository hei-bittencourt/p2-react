import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider } from 'react-router-dom';
import { router } from './src/utils/router';
import {ProvedorCarrinho} from './src/contexts/CarrinhoContext';
import { CategoryProvider } from './src/contexts/CategoryContext';
import {UserProvider} from './src/contexts/userContext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <CategoryProvider>
    <ProvedorCarrinho>
      <RouterProvider router={router} />
      <ToastContainer
        position= "top-center"
        autoClose={1500}
        />
    </ProvedorCarrinho>
    </CategoryProvider>
  </UserProvider>
  </React.StrictMode>
)

