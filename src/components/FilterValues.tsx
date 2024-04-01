import { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import { FilterValueType } from '../types';

function FilterValues() {
  const { activeFilters, setActiveFilters } = useContext(PlanetContext);
  const [filterValue, setFilterValue] = useState<FilterValueType>({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const applyColumns = () => (
    columns.filter((column) => !activeFilters.some((filter) => filter.column === column))
  );

  return (
    <form
      onSubmit={
        (e) => {
          e.preventDefault();
          setActiveFilters([...activeFilters, filterValue]);
          console.log(activeFilters);
      }
    }
    >
      <select
        name="columns"
        id="columns"
        data-testid="column-filter"
        onChange={ (e) => setFilterValue({ ...filterValue, column: e.target.value }) }
      >
        {applyColumns().map((column) => (
          <option key={ column } value={ column }>{column}</option>
        ))}
      </select>

      <select
        name="comparisons"
        id="comparisons"
        data-testid="comparison-filter"
        onChange={ (e) => setFilterValue({ ...filterValue, comparison: e.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        defaultValue={ filterValue.value }
        onChange={ (e) => {
          setFilterValue({ ...filterValue, value: Number(e.target.value) });
        } }
      />

      <button data-testid="button-filter">Filter</button>
    </form>
  );
}

export default FilterValues;
