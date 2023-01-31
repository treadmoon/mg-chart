import './App.css';
import { realData } from './data';

import { Chart } from "../lib/index"

function App() {
  return (
    <div className="App">
      <Chart data={realData} />
    </div>
  );
}

export default App;
