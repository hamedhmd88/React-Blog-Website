import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import Blogs from './pages/Blogs.jsx';
import Servises from './pages/Servises.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/blogs',
        element: <Blogs/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/servises',
        element: <Servises/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
