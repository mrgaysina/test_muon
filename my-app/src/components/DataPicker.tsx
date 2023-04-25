import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { DataArrivals, DataDepartures, Data } from '../data/data';
import { dateOptions } from '../app/optionSlice';



const DataPicker: React.FC = () => {

  const [dateOptionState, setDateOptionState] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const arrivals: boolean = useAppSelector(state => state.tumbler.arrivals);

  useEffect(() => {
    if (arrivals) {
      options(DataArrivals)
    } else {
      options(DataDepartures)
    }
  }, [arrivals])


  function options(data: Data[]): void {
    let result = data.reduce((acc: string[], el: Data) => {
      if (acc.includes(el.date)){
        return acc
      } else {
        return [...acc, el.date]
      }
    }, [])
    dispatch(dateOptions(result));
    setDateOptionState(result);
  }


  return (
    <select>
    {dateOptionState.map((option) => (
        <option key={option}>{option}</option>
      ))
    }
    </select>
  )
}

export default DataPicker;