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
    terminal: string,
    inputSearch: string
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
    terminal: '',
    inputSearch: ''
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

      // Фильтрация по поиску
      if (activeFilters.inputSearch) {
        filteredData = filteredData.filter((item) => item.arrival_city.toLowerCase().includes(activeFilters.inputSearch.toLowerCase()) || item.departure_city.toLowerCase().includes(activeFilters.inputSearch.toLowerCase()) || item.company.toLowerCase().includes(activeFilters.inputSearch.toLowerCase()) || item.flight.toLowerCase().includes(activeFilters.inputSearch.toLowerCase()));
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
    setInputFilter: (state, action): void => {
      state.activeFilters.inputSearch = action.payload;
    },
    clearFilters: (state): void => {
      state.activeFilters = {
        date: '',
        timeFrom: '',
        timeTo: '',
        terminal: '',
        inputSearch: ''
      };
    }
  }
})

export const {allArrivals, allDepartures, filterData, setDateFilter, setTimeFromFilter, setTimeToFilter, setTerminalFilter, setInputFilter, clearFilters} = pickerSlice.actions;

export default pickerSlice.reducer;