import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import ListItem from '../ListItem/ListItem';
import { DataArrivals, DataDepartures, Data } from '../../data/data';
import { ListWrapper } from './List.styles';

const List: React.FC = () => {

  const arrivals: boolean = useAppSelector(state => state.tumbler.arrivals);
  const dataArrivals: [] = useAppSelector(state => state.picker.dataArrivals);
  const dataDepartures: [] = useAppSelector(state => state.picker.dataDepartures);



  return(
    <ListWrapper>
      {arrivals ? (
        dataArrivals.map((arrive: Data) => (
          <ListItem key={arrive.id} value={arrive}/>
        ))
      ) : (
        dataDepartures.map((arrive: Data) => (
          <ListItem key={arrive.id} value={arrive} />
        ))
      )}
    </ListWrapper>
  )
}

export default List;