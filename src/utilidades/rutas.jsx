import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../paginas/Home";

import Error from "../paginas/Error";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default function RutasBrowProv() {
  return <RouterProvider router={rutas} />;
}
