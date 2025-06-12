import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./pages/Index.jsx";
import { RouterProvider } from "react-router-dom";
import { MenuProvider } from "./state/MenuContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MenuProvider>
  </StrictMode>
);
