export interface IGymProviderProps {
  children: React.ReactNode;
}

export interface ISchedules {
  weekdays: string,
  hour: string
}

export interface ILocations {
  content: string,
  fountain: string,
  id: number,
  locker_room: string,
  mask: string,
  opened: boolean,
  schedules: ISchedules[],
  title: string,
  towel: string,
}

export interface IGymInfo {
  current_country_id: number,
  locations: ILocations[],
  success: boolean,
  total: number,
  wp_total: number,
}

export interface IGymContext {
  gymInfo: IGymInfo,
  setGymInfo: React.Dispatch<React.SetStateAction<IGymInfo>>,
  isLoading: boolean,
  filteredLocations: ILocations[],
  setFilteredLocations: React.Dispatch<React.SetStateAction<ILocations[]>>,
}
