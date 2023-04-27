import React from 'react';
import { TumblerContainer, TumblerButton } from './Tumbler.styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeToArrivals, changeToDepartures } from '../../app/tumblerSlice';
import { clearFilters } from '../../app/pickerSlice';


const Tumbler: React.FC = () => {

  const dispatch = useAppDispatch();

  const arrivals = useAppSelector(state => state.tumbler.arrivals);
  const departures = useAppSelector(state => state.tumbler.departures);

  const handleChangeArrivals = () => {
    dispatch(changeToArrivals());
    dispatch(clearFilters())
  }

  const handleChangeDepartures = () => {
    dispatch(changeToDepartures());
    dispatch(clearFilters())
  }

  return(
    <TumblerContainer>
      <TumblerButton active={arrivals} onClick={handleChangeArrivals}>Arrivals</TumblerButton>
      <TumblerButton active={departures} onClick={handleChangeDepartures}>Departures</TumblerButton>
    </TumblerContainer>
  )
}

export default Tumbler;