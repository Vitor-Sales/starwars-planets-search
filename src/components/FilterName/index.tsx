import { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import style from './style.module.css';

function FilterName() {
  const { setFilterName } = useContext(PlanetContext);

  return (
    <div>
      <h1
        className={ style.title }
      >
        Projeto Star Wars - Trybe
      </h1>
      <label htmlFor="searchInput">Search</label>
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
