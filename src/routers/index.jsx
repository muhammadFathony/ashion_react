import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts"
import Home from "../pages/home"
import Detail from "../pages/productDetail"
export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            }
        ]
    }
])