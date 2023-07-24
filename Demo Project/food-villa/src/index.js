import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { About, Body, Contact, Error, Profile } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RestaurantDetail = lazy(() => import("./components/restaurant/RestaurantDetail"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback={<h3>Suspense fallback...</h3>}>
            <RestaurantDetail />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
