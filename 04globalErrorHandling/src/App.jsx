import { ErrorBoundary } from "react-error-boundary";
import Products from "./components/Products";
import BoundaryError from "./components/Examples/BoundaryError";
import Example2 from "./components/Examples/Example2";
import Fallback from "./components/fallback/Fallback";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("logging..." + error, errorInfo);
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
        <Products />
      </ErrorBoundary>
      {/* <div className="text-center m-4">
        <BoundaryError />
      </div> */}
    </>
  );
}

export default App;
