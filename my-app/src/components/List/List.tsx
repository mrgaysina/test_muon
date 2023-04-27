import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import ListItem from '../ListItem/ListItem';
import { Data } from '../../data/data';
import { ListWrapper } from './List.styles';

const List: React.FC = () => {

  const arrivals: boolean = useAppSelector(state => state.tumbler.arrivals);
  const dataArrivals: Data[] = useAppSelector(state => state.picker.dataArrivals);
  const dataDepartures: Data[] = useAppSelector(state => state.picker.dataDepartures);
  const filteredData: Data[] = useAppSelector(state => state.picker.filteredData);


  const [stateDataArrivals, setStateDataArrivals] = useState<Data[]>([])

  useEffect(() => {
    arrivals ? setStateDataArrivals(dataArrivals) : setStateDataArrivals(dataDepartures)
  }, [arrivals, dataArrivals, dataDepartures])

  useEffect(() => {
    setStateDataArrivals(filteredData)
  }, [filteredData])

  return(
    <ListWrapper>
        {stateDataArrivals.map((arrive: Data) => (
          <ListItem key={arrive.id} value={arrive}/>
        ))}
    </ListWrapper>
  )
}

export default List;