import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { MainPage } from "./components/MainPage/MainPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { fetchColors } from "./features/colorSlice.js";
import { fecthNavigation } from "./features/navigationSlice.js";
import { Root } from "./routes/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
