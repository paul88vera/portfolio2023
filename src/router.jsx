import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Resume from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <Error />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
  },
  { path: "/resume", element: <Resume /> },
]);
