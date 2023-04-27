import { createSlice } from "@reduxjs/toolkit";
import { Data } from '../data/data';


type DataState = {
  dataArrivals: Data[],
  dataDepartures: Data[],
  filteredData: Data[],
  activeFilters: {
    date: string,
    timeFrom: string,
    timeTo: string,
    terminal: string
  },
}

const initialState: DataState = {
  dataArrivals: [],
  dataDepartures: [],
  filteredData: [],
  activeFilters: {
    date: '',
    timeFrom: '',
    timeTo: '',
    terminal: ''
  }
}


const pickerSlice = createSlice({
  name: 'picker',
  initialState,
  reducers: {
    allArrivals: (state, action): void => {
      state.dataArrivals = action.payload.sort((a: Data, b: Data) => a.date.slice(12,17) < b.date.slice(12,17))
    },
    allDepartures: (state, action): void => {
      state.dataDepartures = action.payload.sort((a: Data, b: Data) => a.date.slice(12,17) < b.date.slice(12,17))
    },
    filterData: (state, action): void => {
      const { dataArrivals, dataDepartures, activeFilters } = state;

      let filteredData = action.payload ? [...dataArrivals] : [...dataDepartures]
      
      // Фильтрация по дате
      if (activeFilters.date) {
        filteredData = filteredData.filter((arrival) => arrival.date.slice(0,10) === activeFilters.date);
      }

      // Фильтрация по времени
      if (activeFilters.timeFrom) {
        filteredData = filteredData.filter((arrival) => arrival.date.slice(12,17) >= activeFilters.timeFrom);
      }

      if (activeFilters.timeTo){
        filteredData = filteredData.filter((arrival) => arrival.date.slice(12,17) <= activeFilters.timeTo);
      }

      // Фильтрация по терминалу
      if (activeFilters.terminal) {
        filteredData = filteredData.filter((arrival) => arrival.terminal === activeFilters.terminal);
      }

      state.filteredData = filteredData;
    },
    setDateFilter: (state, action): void => {
      state.activeFilters.date = action.payload;
    },
    setTimeFromFilter: (state, action): void => {
      state.activeFilters.timeFrom = action.payload;
    },
    setTimeToFilter: (state, action): void => {
      state.activeFilters.timeTo = action.payload;
    },
    setTerminalFilter: (state, action): void => {
      state.activeFilters.terminal = action.payload;
    },
    clearFilters: (state): void => {
      state.activeFilters = {
        date: '',
        timeFrom: '',
        timeTo: '',
        terminal: ''
      };
    },
    search: (state, action): void => {
      const { filteredData, dataArrivals, dataDepartures, activeFilters } = state;
      const { data, arrival } = action.payload;
      
      let searchData: Data[] = filteredData.length > 0 && Object.values(activeFilters).every(item => item !== '') ? filteredData : arrival ? dataArrivals : dataDepartures;


      searchData = searchData.filter((item) => item.arrival_city.toLowerCase().includes(data.toLowerCase()) || item.departure_city.toLowerCase().includes(data.toLowerCase()) || item.company.toLowerCase().includes(data.toLowerCase()) || item.flight.toLowerCase().includes(data.toLowerCase()));
    
      state.filteredData = data.length !== 0 ? searchData : arrival ? dataArrivals : dataDepartures;
    } 
  }
})

export const {allArrivals, allDepartures, filterData, setDateFilter, setTimeFromFilter, setTimeToFilter, setTerminalFilter, clearFilters, search} = pickerSlice.actions;

export default pickerSlice.reducer;