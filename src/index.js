import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Study from './Study';
import Props from './study/Props';
import Children from './study/Children';

const router = createBrowserRouter([
    {path: '/', element: <Study/>},
    {path: '/props', element: <Props/>},
    {path: '/children', element: <Children />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
