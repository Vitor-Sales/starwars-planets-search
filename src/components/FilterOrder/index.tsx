import { useContext, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { ColumnType, PlanetType } from '../../types';

function FilterOrder() {
  const {
    columns,
    setFilteredPlanets,
    filteredPlanets,
  } = useContext(PlanetContext);

  const [orderValue, setOrderValue] = useState<{ column: string, sort: string }>({
    column: 'population',
    sort: 'ASC',
  });

  //   const ascendingOrder = (a: PlanetType, b: PlanetType) => {
  //     if (a === 'unknown') return 1;
  //     if (b === 'unknown') return -1;
  //     return Number(a[orderValue.column]) - Number(b[orderValue.column]);
  //   };

  //   const descendingOrder = (a: PlanetType, b: PlanetType) => {
  //     if (a === 'unknown') return -1;
  //     if (b === 'unknown') return 1;
  //     return Number(b[orderValue.column]) - Number(a[orderValue.column]);
  //   };

  const handleClick = () => {
    setFilteredPlanets([...filteredPlanets].sort((a: PlanetType, b: PlanetType) => {
      if (a[orderValue.column] === 'unknown') return 1;
      if (b[orderValue.column] === 'unknown') return -1;

      if (orderValue.sort === 'ASC') {
        return Number(a[orderValue.column]) - Number(b[orderValue.column]);
      }
      return Number(b[orderValue.column]) - Number(a[orderValue.column]);
    }));
    setOrderValue({ column: 'population', sort: 'ASC' });
  };

  return (
    <div>
      <select
        name="columnOrder"
        id="columnOrder"
        value={ orderValue.column }
        data-testid="column-sort"
        onChange={ (e) => setOrderValue({
          ...orderValue, column: e.target.value as ColumnType,
        }) }
      >
        {columns && columns
          .map((column) => <option key={ column } value={ column }>{column}</option>)}
      </select>
      <label htmlFor="upward">Upward</label>
      <input
        type="radio"
        value="ASC"
        name="order"
        id="upward"
        data-testid="column-sort-input-asc"
        onChange={ (e) => setOrderValue({ ...orderValue, sort: e.target.value }) }
      />
      <label htmlFor="downward">Downward</label>
      <input
        type="radio"
        value="DESC"
        name="order"
        id="downward"
        data-testid="column-sort-input-desc"
        onChange={ (e) => setOrderValue({ ...orderValue, sort: e.target.value }) }
      />
      <button onClick={ handleClick } data-testid="column-sort-button">Order</button>
    </div>
  );
}

export default FilterOrder;
