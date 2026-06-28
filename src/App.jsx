import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
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
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tutorials",
        element: <TutorialsHome />,
      },
      {
        path: "/sitemap",
        element: <Sitemap />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
