import { useContext } from 'react';
import { PlanetType } from '../../types';
import PlanetContext from '../../context/PlanetContext';

function Table() {
  const { filteredPlanets } = useContext(PlanetContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          {/* <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th> */}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets && filteredPlanets.map((planet: PlanetType) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            {/* <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
