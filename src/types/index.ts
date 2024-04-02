export type PlanetType = {
  [key: string]: string | string[] | undefined,
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents?: string[],
  films: string[],
  created: string,
  edited: string,
  url: string,
};

export type ThisContextType = {
  planets: PlanetType[],
  filterName: string,
  setFilterName: React.Dispatch<React.SetStateAction<string>>,
  activeFilters: FilterValueType[],
  setActiveFilters: React.Dispatch<React.SetStateAction<FilterValueType[]>>,
  removeAllFilters: () => void,
  columns: ColumnType[];
  // applyFilter: () => PlanetType[],
  filteredPlanets: PlanetType[],
  setFilteredPlanets: React.Dispatch<React.SetStateAction<PlanetType[]>>,
};

export type FilterNameType = {
  info: string,
  value: string,
};

export type FilterValueType = {
  column: ColumnType,
  comparison: string,
  value: number,
};

export type OrderValueType = {
  column: ColumnType,
  sort: string,
};

export type ColumnType = 'population'
| 'orbital_period'
| 'diameter'
| 'rotation_period'
| 'surface_water';
