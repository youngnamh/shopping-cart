import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";
import Store from "./Store";
import Home from "./Home";
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar /> <Home />
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "store",
      element: (
        <div>
          <NavBar /> <Store />
        </div>
      ),
    },
    {
      path: "cart",
      element: (
        <div>
          <NavBar /> <Cart />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
