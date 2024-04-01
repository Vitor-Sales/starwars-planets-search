import { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import { FilterValueType } from '../types';

// function FilterValues() {
//   const { filterValues, setFilterValues } = useFilterValues();
//   const { filters } = useFilters();

//   const handleFilterValueChange = (filter: string, value: string) => {
//     setFilterValues((prev) => ({
//       ...prev,
//       [filter]: value,
//     }));
//   };

//   return (
//     <div>
//       {Object.entries(filters).map(([filter, values]) => (
//         <div key={filter}>
//           <h2>{filter}</h2>
//           <select
//             value={filterValues[filter]}
//             onChange={(e) => handleFilterValueChange(filter, e.target.value)}
//           >
//             <option value="">All</option>
//             {values.map((value) => (
//               <option key={value} value={value}>
//                 {value}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// }

function FilterValues() {
  const { activeFilters, setActiveFilters } = useContext(PlanetContext);
  const [filterValue, setFilterValue] = useState<FilterValueType>({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
