import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Link from "./pages/Link";
import Dashboard from "./pages/Dashboard";
import Redirect from "./pages/RedirectPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/link/:id",
          element: <Link />,
        },
        {
          path: "/:id",
          element: <Redirect />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
