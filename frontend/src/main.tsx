import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './app/router/Routes';
import { store } from './app/stores/stores';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
)
