import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={PublicRoutes}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
);
