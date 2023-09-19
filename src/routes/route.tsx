import { RouteObject } from "react-router-dom";
import PublicRoutes from "./Public";
import ProtectedRoute from "./Protected";
import NotFoundRoutes from "./NotFound";
import Starter from "../pages/starter";
import CreateProduct from "../pages/createProduct";

const routes: RouteObject[] = [
  //public routes
  {
    path: "/",
    element: <PublicRoutes element={<Starter />} />,
  },
  {
    path: "/create-product",
    element: <PublicRoutes element={<CreateProduct />} />,
  },
  //protected routes
  //doing it for scalability- nit applicable now
  {
    path: "/create-product",
    element: (
      <ProtectedRoute isAuthenticated={true} element={<CreateProduct />} />
    ),
    caseSensitive: true,
  },

  //not found routes
  { path: "*", element: <NotFoundRoutes /> },
];

export default routes;
