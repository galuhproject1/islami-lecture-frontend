import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.tsx";
import About from "./routes/about/index.tsx";
import Course from "./routes/course/index.tsx";
import Blog from "./routes/blog/index.tsx";
import Tutor from "./routes/tutor/index.tsx";
import Dashboard from "./routes/dashboard/index.tsx";
import Explore from "./routes/dashboard/explore/index.tsx";
import Register from "./routes/auth/register/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <App />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/e-course",
    element: (
      <MainLayout>
        <Course />
      </MainLayout>
    ),
  },
  {
    path: "/blog",
    element: (
      <MainLayout>
        <Blog />
      </MainLayout>
    ),
  },
  {
    path: "/tutor",
    element: (
      <MainLayout>
        <Tutor />
      </MainLayout>
    ),
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/explore",
    element: (
      <MainLayout>
        <Explore />
      </MainLayout>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
