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
import UploadPage from "./routes/auth/upload/index.tsx";
import SurveyPage from "./routes/auth/survey/index.tsx";
import CourseDetail from "./routes/course/[id].tsx";
import CheckoutPage from "./routes/checkout/index.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.tsx";
import ClassPage from "./routes/dashboard/class/index.tsx";
import TransactionPage from "./routes/dashboard/transaction/index.tsx";
import AccountSetting from "./routes/dashboard/setting/account/index.tsx";
import ProfileSetting from "./routes/dashboard/setting/profile/index.tsx";
import NotificationSetting from "./routes/dashboard/setting/notification/index.tsx";
import PaymentMethodSetting from "./routes/dashboard/setting/payment-method/index.tsx";
import PrivacyPolicy from "./routes/dashboard/setting/privacypolicy/index.tsx";
import Logout from "./routes/dashboard/setting/logout/index.tsx";
import DetailClassPage from "./routes/dashboard/class/[id].tsx";
import CreateClassPage from "./routes/dashboard/class/create.tsx";

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
    path: "/e-course/:id",
    element: (
      <MainLayout>
        <CourseDetail />
      </MainLayout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <MainLayout>
        <CheckoutPage />
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
    path: "/auth/upload",
    element: <UploadPage />,
  },
  {
    path: "/auth/survey",
    element: <SurveyPage />,
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
  },
  {
    path: "/dashboard/class",
    element: (
      <MainLayout>
        <ClassPage />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/class/:id",
    element: (
      <MainLayout>
        <DetailClassPage />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/class/create",
    element: (
      <MainLayout>
        <CreateClassPage />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/transaction",
    element: (
      <MainLayout>
        <TransactionPage />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/setting/edit-profile",
    element: (
      <MainLayout>
        <ProfileSetting />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/setting/account-settings",
    element: (
      <MainLayout>
        <AccountSetting />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/setting/notification",
    element: (
      <MainLayout>
        <NotificationSetting />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/setting/payment-method",
    element: (
      <MainLayout>
        <PaymentMethodSetting />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/setting/privacy-policy",
    element: (
      <MainLayout>
        <PrivacyPolicy />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard/setting/logout",
    element: (
      <MainLayout>
        <Logout />
      </MainLayout>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
