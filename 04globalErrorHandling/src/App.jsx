import { ErrorBoundary } from "react-error-boundary";
import Products from "./components/Products";
import Fallback from "./components/fallback/Fallback";
import Country from "./components/GlobalErrorHandler/Country";
import Weather from "./components/weather";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";

function App() {

  const errorHandler = (error, errorInfo) => {
    console.log("logging..." + error, errorInfo);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} path="/">
        <Route element={<Country />} path="/" />
        <Route element={<Weather />} path="/weather" />
        <Route element={<Products />} path="/products" />
      </Route>
    )
  );
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={errorHandler}
      // onReset={(details) => {
      //   alert(details);
      // }}
    >
      <RouterProvider router={router} />
      {/* <Weather /> */}
      {/* <Products /> */}
      {/* <div className="text-center m-4">
        <BoundaryError />
      </div> */}
    </ErrorBoundary>
  );
}

export default App;
