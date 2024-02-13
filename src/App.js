import React, { Suspense, lazy } from "react";
import Loader from "./Components/Loader";
const Home = lazy(() => import("./Components/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <Loader />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
