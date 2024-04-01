import FilterName from './components/FilterName';
import './App.css';
import Table from './components/Table';
import FilterValues from './components/FilterValues';
import FilterOrder from './components/FilterOrder';

function App() {
  return (
    <div>
      <FilterName />
      <FilterValues />
      <FilterOrder />
      <Table />
    </div>
  );
}

export default App;
