export type PlanetType = {
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
  setFilterName: (search: string) => void,
  activeFilters: FilterValueType[],
  setActiveFilters: (filter: FilterValueType) => void,
  addFilter: (filter: FilterValueType) => void,
  removeFilter: (filter: FilterValueType) => void,
  removeAllFilters: () => void,
};

export type FilterNameType = {
  info: string,
  value: string,
};

export type FilterValueType = {
  column: string,
  comparison: string,
  value: number,
};
