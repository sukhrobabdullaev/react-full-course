import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Blogs from "../pages/Blogs";
import RootLayout from "../layout/RootLayout";
import Posts from "../pages/Posts";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
  },
  {
    path: "*",
    element:  <NotFound/>
  },
  {
    path: "/about",
    element: (
      <RootLayout>
        <About />
      </RootLayout>
    ),
  },
  {
    path: "/articles",
    element: (
      <RootLayout>
        <Article />
      </RootLayout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <RootLayout>
        <Blogs />
      </RootLayout>
    ),
  },
  {
    path: "/blogs/posts",
    element: (
      <RootLayout>
        <Posts />
      </RootLayout>
    ),
  },
]);

export default router;
