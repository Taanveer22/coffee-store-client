import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Users from "../pages/Users";
import UpdateCoffee from "../pages/UpdateCoffee";
import DetailsCoffee from "../pages/DetailsCoffee";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/detailsCoffee/:id",
        element: <DetailsCoffee></DetailsCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch(`http://localhost:5000/users`),
      },
    ],
  },
]);

export default PublicRoutes;
