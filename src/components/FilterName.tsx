import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterName() {
  const { filterName, setFilterName } = useContext(PlanetContext);

  return (
    <div>
      <label htmlFor="searchInput">Projeto Star Wars - Trybe</label>
      <input
        type="search"
        value={ filterName }
        id="searchInput"
        name="searchInput"
        data-testid="name-filter"
        onChange={ (e) => setFilterName(e.target.value) }
      />
    </div>

  );
}

export default FilterName;
