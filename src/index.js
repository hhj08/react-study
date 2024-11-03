import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Study from './Study';
import ParentComponent from './study/props/ParentComponent';

const router = createBrowserRouter([
    {path: '/', element: <Study/>},
    {path: '/props', element: <ParentComponent/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
