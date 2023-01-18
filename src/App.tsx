import { lazy } from 'react';
import './App.css';
import { realData } from './data';

const Chart = lazy(async () => import('./views/Chart'));

function App() {
  return (
    <div className="App">
      <h2>组织结构图</h2>
      <Chart data={realData} />
    </div>
  );
}

export default App;
