import { useState, lazy, Suspense } from "react";
import "./App.css";
import { createdData, realData } from "./data";

const Chart = lazy(async () => import("./views/Chart"));

function App() {
  return (
    <div className="App">
      <Chart data={realData} />
    </div>
  );
}

export default App;
