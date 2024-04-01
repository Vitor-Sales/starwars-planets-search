import { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import { FilterValueType, PlanetType } from '../types';

type PlanetProviderProps = {
  children: React.ReactNode,
};

function PlanetProvider({ children }: PlanetProviderProps) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterValueType[]>([]);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

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

  const values = {
    planets,
    filterName,
    setFilterName,
    activeFilters,
    setActiveFilters,
    removeAllFilters,
    columns,
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
