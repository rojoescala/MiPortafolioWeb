import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.tsx';
import ProjectHome from './pages/ProjectHome.tsx';
import Navbar from './components/Navbar.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/project/:projectName",
        element: <ProjectHome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
