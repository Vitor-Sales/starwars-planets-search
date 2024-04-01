import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterName() {
  const { filterName, setFilterName } = useContext(PlanetContext);

  console.log(filterName);

  return (
    <div>
      <label htmlFor="serchInput">Projeto Star Wars - Trybe</label>
      <input
        type="search"
        id="searchInput"
        name="searchInput"
        data-testid="name-filter"
        onChange={ (e) => setFilterName(e.target.value) }
      />
    </div>

  );
}

export default FilterName;
