import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../paginas/Home";
import Error from "../paginas/Error";
import ApiDoc from "../paginas/ApiDoc";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/api_doc",
    element: <ApiDoc />,
  },
]);

export default function RutasBrowProv() {
  return <RouterProvider router={rutas} />;
}
