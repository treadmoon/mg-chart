import './App.css';
import { realData } from './data';

// import { Chart } from "../dist/my-lib.mjs"
import { Chart } from "../lib/index"
import "../dist/style.css"

function App() {
  return (
    <div className="App">
      <Chart data={realData} />
    </div>
  );
}

export default App;
