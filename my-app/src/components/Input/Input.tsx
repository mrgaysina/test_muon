import React, { useState } from 'react';
import { SearchInputContainer, SearchIcon, CustomInput, Button } from './Input.styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { search } from '../../app/pickerSlice';



const Input: React.FC = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const arrival: boolean = useAppSelector(state => state.tumbler.arrivals);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case 'Enter':
        dispatch(search({data: inputValue, arrival}))
        break;
      case 'Backspace':
        if (inputValue.length === 1) {
          cancelSearchHandle()
        }
        break;
      default:
        break;
    }

  }

  const searchHandle = () => {
    dispatch(search({data: inputValue, arrival}))
  }

  const cancelSearchHandle = () => {
    dispatch(search({data: '', arrival}));
    setInputValue('');
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