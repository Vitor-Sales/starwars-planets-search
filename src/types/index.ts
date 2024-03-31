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
  filter: string,
  setFilter: (search: string) => void,
};

export type FilterNameType = {
  info: string,
  value: string,
};
