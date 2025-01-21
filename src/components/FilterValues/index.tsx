import { useState, useContext, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { ColumnType, FilterValueType } from '../../types';
import style from './style.module.css';

function FilterValues() {
  const { activeFilters,
    setActiveFilters,
    removeAllFilters,
    columns,
  } = useContext(PlanetContext);

  const [filterValue, setFilterValue] = useState<FilterValueType>({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  const applyColumns = () => (
    columns && columns
      .filter((column) => !activeFilters.some((filter) => filter.column === column))
  );

  useEffect(() => {
    setFilterValue({ ...filterValue, column: applyColumns() && applyColumns()[0] });
  }, [activeFilters]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActiveFilters([...activeFilters, filterValue]);
  };

  return (
    <div>
      <form
        onSubmit={ handleSubmit }
        className={ style.form }
      >
        <select
          name="columns"
          className={ style.select }
          id="columns"
          data-testid="column-filter"
          onChange={
            (e) => setFilterValue({
              ...filterValue, column: e.target.value as ColumnType,
            })
        }
        >
          {columns && applyColumns().map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))}
        </select>
        <select
          name="comparisons"
          className={ style.select }
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
          className={ style.input }
          data-testid="value-filter"
          defaultValue={ filterValue.value }
          onChange={ (e) => {
            setFilterValue({ ...filterValue, value: Number(e.target.value) });
          } }
        />
        <button className={ style.button } data-testid="button-filter">Filter</button>
      </form>
      {activeFilters && activeFilters.map((filter) => (
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
        className={ style.button }
        data-testid="button-remove-filters"
      >
        Remove All Filters
      </button>
    </div>
  );
}

export default FilterValues;
