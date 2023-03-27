// Library Imports.
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Route Component Imports.
import App from './App';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    // TODO: Make error page for 404 errors.
    errorElement: null,

    // TODO: Make pages render as children under the App page.
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);