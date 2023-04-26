import React, { useState } from 'react';
import { TumblerContainer, TumblerButton } from './Tumbler.styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeToArrivals, changeToDepartures } from '../../app/tumblerSlice';


const Tumbler: React.FC = () => {

  const dispatch = useAppDispatch();

  const arrivals = useAppSelector(state => state.tumbler.arrivals);
  const departures = useAppSelector(state => state.tumbler.departures);

  return(
    <TumblerContainer>
      <TumblerButton active={arrivals} onClick={() => dispatch(changeToArrivals())}>Arrivals</TumblerButton>
      <TumblerButton active={departures} onClick={() => dispatch(changeToDepartures())}>Departures</TumblerButton>
    </TumblerContainer>
  )
}

export default Tumbler;