/**
 * File Name: main.jsx
 * Student's Name: Hoang Giang Dang
 * Student ID: 301255147
 * Date: Jun 1,2024
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutMePage from './pages/AboutMePage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/AboutMePage",
      element: <AboutMePage/>,
    },
    {
      path: "/ProjectPage",
      element: <ProjectPage/>,
    },
    {
      path: "/ServicesPage",
      element: <ServicesPage/>,
    },
    {
      path: "/ContactPage",
      element: <ContactPage/>,
    },
   
  ]);
  


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />,

  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
