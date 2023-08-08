import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";
import Store from "./Store";
import Home from "./Home";
import Cart from "./Cart";
import Footer from "./Footer";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/", // yes, again
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

const NavbarWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Router;

/*
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/", // yes, again
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}; */
