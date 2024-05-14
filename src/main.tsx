import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';

const Page1= lazy(() =>
  wait(1300).then(() => import("./screens/Home.tsx"))
);


const AboutUs = lazy(() =>
  wait(1300).then(() => import("./screens/AboutUs.tsx"))
);

const Programs = lazy(() =>
  wait(1300).then(() => import("./screens/Programs.tsx"))
);

const WorkUs = lazy(() =>
  wait(1300).then(() => import("./screens/WorkUs.tsx"))
);


const router = createBrowserRouter([
  {
    path: "/balaod/",
    element: <App />,
    
    children: [
      {
        path: "/balaod/", 
        element: <Navigate to="/balaod/home" />, 
      },
      {
        path: "/balaod/home",
        element: <>
        <Suspense fallback={<Loader />}>
          <Page1 />
        </Suspense>
      </>,
      },
      {
        path: "/balaod/about",
        element: <>
        <Suspense fallback={<Loader />}>
          <AboutUs/>
        </Suspense>
      </>,
      },
      {
        path: "/balaod/programs",
        element: <>
        <Suspense fallback={<Loader />}>
          <Programs/>
        </Suspense>
      </>,
      },
      
      {
        path: "/balaod/work-with-us",
        element: <>
        <Suspense fallback={<Loader />}>
          <WorkUs/>
        </Suspense>
      </>,
      },



      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
