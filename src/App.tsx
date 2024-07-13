import FilterName from './components/FilterName';
import FilterValues from './components/FilterValues';
import FilterOrder from './components/FilterOrder';
import Table from './components/Table';

import style from './App.module.css';

function App() {
  return (
    <main className={ style.main }>
      <FilterName />
      <FilterValues />
      <FilterOrder />
      <Table />
    </main>
  );
}

export default App;
