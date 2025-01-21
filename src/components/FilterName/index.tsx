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
      <label htmlFor="searchInput" className={ style.label }>Search</label>
      <input
        type="search"
        id="searchInput"
        className={ style.input }
        name="searchInput"
        data-testid="name-filter"
        onChange={ (e) => setFilterName(e.target.value) }
      />
    </div>

  );
}

export default FilterName;
