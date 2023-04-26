import React from 'react';
import { SearchInputContainer, SearchIcon, CustomInput } from './Input.styles'


const Input: React.FC = () =>{
  return(
    <SearchInputContainer>
      <SearchIcon />
      <CustomInput type="text" placeholder="Поиск..." />
    </SearchInputContainer>
  )
}

export default Input;