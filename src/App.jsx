import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { TutorialsHome } from "./pages/tutorial/TutorialsHome";
import { Sitemap } from "./pages/sitemap/Sitemap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Layout children={<Home />} />,
      },
      {
        path: "/about",
        element: <Layout children={<About />} />,
      },
      {
        path: "/tutorials",
        element: <Layout children={<TutorialsHome />} />,
      },
      {
        path: "/sitemap",
        element: <Layout children={<Sitemap />} />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
