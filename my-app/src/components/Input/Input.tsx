import React, { useState } from 'react';
import { SearchInputContainer, SearchIcon, CustomInput, Button } from './Input.styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setInputFilter, filterData } from '../../app/pickerSlice';



const Input: React.FC = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const arrivals: boolean = useAppSelector(state => state.tumbler.arrivals);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case 'Enter':
        dispatch(setInputFilter(inputValue));
        dispatch(filterData(arrivals));

        break;
      case 'Backspace':
        if (inputValue.length === 1) {
          cancelSearchHandle()
          dispatch(setInputFilter(''))
        dispatch(filterData(arrivals));

        }
        break;
      default:
        break;
    }

  }

  const searchHandle = () => {
    dispatch(setInputFilter(inputValue));
    dispatch(filterData(arrivals));
  }

  const cancelSearchHandle = () => {
    setInputValue('');
    dispatch(setInputFilter(''))
    dispatch(filterData(arrivals));
  }

  return(
    <SearchInputContainer onKeyDown={handleKeyUp}>
      <SearchIcon />
      <CustomInput type="text" placeholder="Поиск по номеру рейса, городу и авиакомпании" value={inputValue} onChange={handleChange}/>
      <Button color='#4056A1' onClick={searchHandle}>Поиск</Button>
      <Button color='#333' onClick={cancelSearchHandle}>Отмена</Button>
    </SearchInputContainer>
  )
}

export default Input;