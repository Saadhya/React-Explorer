import { ErrorBoundary } from "react-error-boundary";
import Products from "./components/Products";
import Fallback from "./components/fallback/Fallback";
import Country from "./components/GlobalErrorHandler/Country";
import Weather from "./components/weather";

function App() {
  const errorHandler = (error, errorInfo) => {
    // console.log("logging..." + error, errorInfo);
  };

  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onError={errorHandler}
        // onReset={(details) => {
        //   alert(details);
        // }}
      >
        {/* <Country /> */}
        <Weather />
        {/* <Products /> */}
      </ErrorBoundary>

      {/* <Country /> */}

      {/* <ErrorBoundary
        FallbackComponent={Fallback}
        onError={errorHandler}
        // onReset={(details) => {
        //   alert(details);
        // }}
      >
        <Products />
      </ErrorBoundary> */}

      {/* <div className="text-center m-4">
        <BoundaryError />
      </div> */}
    </>
  );
}

export default App;
