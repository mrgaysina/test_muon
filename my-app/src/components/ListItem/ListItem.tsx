import React from 'react';
import { Data } from '../../data/data';
import { useAppSelector } from '../../app/hooks';
import { ListItemWrapper, ListItemTime, ListItemFlight, ListItemCity, ListItemTerminal } from './ListItem.styles'

type ListItemProps = {
  value: Data
}


const ListItem: React.FC<ListItemProps> = ({value}) => {

  const arrivals: boolean = useAppSelector(state => state.tumbler.arrivals);

  return(
    <ListItemWrapper>
      <ListItemTime>{value.date.slice(12,17)}</ListItemTime>
      <ListItemCity>{arrivals ? (value.departure_city) : (value.arrival_city)}</ListItemCity>
      <ListItemFlight>
        <div>{value.company}</div>
        <div>{value.flight}</div>
      </ListItemFlight>
      <ListItemTerminal>{value.terminal}</ListItemTerminal>
    </ListItemWrapper>
  )
}

export default ListItem;