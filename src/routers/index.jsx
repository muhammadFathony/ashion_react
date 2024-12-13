import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts"
import Home from "../pages/home"
export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])