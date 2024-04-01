import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import { ColumnType, PlanetType } from '../types';

function FilterOrder() {
  const {
    columns,
    orderValue,
    setOrderValue,
    applyFilter,
  } = useContext(PlanetContext);

  //   const handleClick = () => {
  //     setFilteredPlanets(filteredPlanets.sort((a: PlanetType, b: PlanetType) => {
  //       if (orderValue.value === 'upwards') {
  //         return Number(a[orderValue.column]) - Number(b[orderValue.column]);
  //       }
  //       return Number(b[orderValue.column]) - Number(a[orderValue.column]);
  //     }));
  //   };

  return (
    <div>
      <select
        name="columnOrder"
        id="columnOrder"
        onChange={ (e) => setOrderValue({
          ...orderValue, column: e.target.value as ColumnType,
        }) }
      >
        {columns
          .map((column) => <option key={ column } value={ column }>{column}</option>)}
      </select>
      <label htmlFor="upward">Upward</label>
      <input
        type="radio"
        value="upward"
        name="order"
        id="upward"
        checked
        onChange={ (e) => setOrderValue({ ...orderValue, value: e.target.value }) }
      />
      <label htmlFor="downward">Downward</label>
      <input
        type="radio"
        value="downward"
        name="order"
        id="downward"
        onChange={ (e) => setOrderValue({ ...orderValue, value: e.target.value }) }
      />
      {/* <button onClick={ handleClick }>Order</button> */}
    </div>
  );
}

export default FilterOrder;
