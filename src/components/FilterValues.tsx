import { useState, useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import { FilterValueType } from '../types';

function FilterValues() {
  const { activeFilters,
    setActiveFilters,
    removeFilter,
    removeAllFilters,
    columns,
  } = useContext(PlanetContext);

  const [filterValue, setFilterValue] = useState<FilterValueType>({
    column: columns[0],
    comparison: 'maior que',
    value: 0 });

  const applyColumns = () => (
    columns.filter((column) => !activeFilters.some((filter) => filter.column === column))
  );

  useEffect(() => {
    setFilterValue({ ...filterValue, column: applyColumns()[0] });
  }, [activeFilters]);

  return (
    <div>
      <form
        onSubmit={
            (e) => {
              e.preventDefault();
              setActiveFilters([...activeFilters, filterValue]);
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
          onChange={
             (e) => setFilterValue({
               ...filterValue,
               comparison: e.target.value,
             })
}
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
      {activeFilters.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button
            onClick={ () => {
              setActiveFilters(activeFilters.filter((f) => f.column !== filter.column));
            } }
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={ removeAllFilters }
        data-testid="button-remove-filters"
      >
        Remove All Filters
      </button>
    </div>
  );
}

export default FilterValues;
