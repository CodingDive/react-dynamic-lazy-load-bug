import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

function App() {
  const buttonPath = "./Button";
  const LazyLoadedButton = lazy(() => import(buttonPath));

  return (
    <div>
      <Suspense fallback={<p>Loading ...</p>}>
        <p>Text</p>
        <LazyLoadedButton />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
