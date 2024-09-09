import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Root from "./components/Root";
import ProductInfo from "./pages/ProductInfo";
// import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/product", element: <Product/>},
      {path: "/product/:productId", element: <ProductInfo/>},
    ],
  },
  // {
  //   path: "/product",
  //   element: <Product/>,
  //   errorElement: <NotFound/>
  // }
]);

const App = () => {
  return <RouterProvider router={router}/>;
 
};

export default App;
