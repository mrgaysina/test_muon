import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { DataArrivals, DataDepartures, Data } from '../../data/data';
import { Select, SelectWrapper } from './Picker.styles';
import { allArrivals, allDepartures } from '../../app/pickerSlice'


const Picker: React.FC = () => {

  const [dateOption, setDateOption] = useState<string[]>([]);
  const [timeOption, setTimeOption] = useState<string[]>([]);
  const [terminalOption, setTerminalOption] = useState<string[]>([]);
  const [valueTime1, setValueTime1] = useState<string | null>(null);
  const [valueTime2, setValueTime2] = useState<string | null>(null);
  const [valueDate, setValueDate] = useState<string | null>(null);
  const [valueTerminal, setValueTerminal] = useState<string | null>(null);

  const arrivals: boolean = useAppSelector(state => state.tumbler.arrivals);

  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(allArrivals(DataArrivals)); 
      dispatch(allDepartures(DataDepartures));
  }, [])


  useEffect(() => {
    setValueTime1(null);
    setValueTime2(null);
    setValueDate(null);
    setValueTerminal(null);
    options(arrivals ? DataArrivals : DataDepartures);
  }, [arrivals])



  function options(data: Data[]): void {
    let dateResult = data.reduce((acc: string[], el: Data) => (acc.includes(el.date.slice(0,10))) ? acc : [...acc, el.date.slice(0,10)], [])
    let terminalResult = data.reduce((acc: string[], el: Data) => (acc.includes(el.terminal)) ? acc : [...acc, el.terminal], [])
    let timeResult = data.reduce((acc: string[], el: Data) => {
      const time = el.date.slice(12,17);
      return acc.includes(time) ? acc : [...acc, time];
    }, []);
    setDateOption(dateResult);
    setTerminalOption(terminalResult);
    setTimeOption(timeResult);
  }

  const handleTime1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueTime1(e.target.value);
  }

  const handleTime2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueTime2(e.target.value);
  }

  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueDate(e.target.value);
  }

  const handleTerminal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueTerminal(e.target.value);
  }



  return (
    <SelectWrapper>
    <Select onChange={handleDate} value={valueDate || ''}>
    <option value="">Select date</option>
    {dateOption.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))
    }
    </Select>
    <Select onChange={handleTime1} value={valueTime1 || ''}>
        <option value="">Select time</option>
        {timeOption.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
      <Select disabled={!valueTime1} onChange={handleTime2} value={valueTime2 || ''}>
        <option value="">Select time</option>
        {timeOption.map((option) => (
          valueTime1 && option < valueTime1 ? null : <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    <Select onChange={handleTerminal} value={valueTerminal || ''}>
    <option value="">All terminals</option>
    {terminalOption.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))
    }
    </Select>
    </SelectWrapper>
  )
}

export default Picker;