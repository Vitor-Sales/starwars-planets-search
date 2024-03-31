import { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filter, setFilter } = useContext(PlanetContext);

  console.log(filter);

  return (
    <div>
      <label htmlFor="serchInput">Projeto Star Wars - Trybe</label>
      <input
        type="search"
        id="searchInput"
        name="searchInput"
        data-testid="name-filter"
        onChange={ (e) => setFilter(e.target.value) }
      />
    </div>

  );
}

export default Filter;
