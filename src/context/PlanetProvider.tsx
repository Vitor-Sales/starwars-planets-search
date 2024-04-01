import { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import { ColumnType, FilterValueType, PlanetType } from '../types';

type PlanetProviderProps = {
  children: React.ReactNode,
};

function PlanetProvider({ children }: PlanetProviderProps) {
  const [planets, setPlanets] = useState<PlanetType[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>(planets);
  const [filterName, setFilterName] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterValueType[]>([]);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ] as ColumnType[];
  const [orderValue, setOrderValue] = useState({
    column: columns[0],
    value: 'upward',
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const starWarsPlanets = await data.results
        .map((planet: PlanetType) => {
          delete planet.residents;
          return planet;
        });
      await setPlanets(starWarsPlanets);
    };
    fetchPlanets();
  }, []);

  const removeAllFilters = () => {
    setActiveFilters([]);
  };

  const applyFilter = () => (
    planets
      .filter((planet) => planet.name.includes(filterName))
      .filter((planet) => activeFilters.every(({ column, comparison, value }) => {
        if (comparison === 'maior que') return Number(planet[column]) > value;
        if (comparison === 'menor que') return Number(planet[column]) < value;
        return Number(planet[column]) === value;
      }))
  );

  // useEffect(() => {
  //   setFilteredPlanets(planets
  //     .filter((planet) => planet.name.includes(filterName))
  //     .filter((planet) => activeFilters.every(({ column, comparison, value }) => {
  //       if (comparison === 'maior que') return Number(planet[column]) > value;
  //       if (comparison === 'menor que') return Number(planet[column]) < value;
  //       return Number(planet[column]) === value;
  //     })));
  // }, [planets, filterName, activeFilters]);

  const values = {
    planets,
    filterName,
    setFilterName,
    activeFilters,
    setActiveFilters,
    removeAllFilters,
    columns,
    orderValue,
    setOrderValue,
    applyFilter,
  };

  return (
    <PlanetContext.Provider value={ values }>
      <div>
        {children}
      </div>
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;
