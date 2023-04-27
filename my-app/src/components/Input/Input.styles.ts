import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  border: none;
  width: 50%;

  &:focus-within {
    & > Button {
      visibility: visible;
    }
  }
  
  @media (max-width: 768px) {
    border-bottom: 1px solid #4056A1;
    width: 95%;
    box-sizing: border-box;
  }

  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #999;
  margin-right: 4px;
  height: 8px;

  @media (max-width: 500px) {
    height: 8px;
    margin-right: 0px;
  }
`;

export const CustomInput = styled.input`
  flex: 1;
  border: none;
  font-size: 10px;
  font-weight: 400;
  color: #333;
  outline: none

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none
  }

  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 10px;
  font-weight: 400;
  color: ${props => props.color};
  background: transparent;
  padding: 1px 2px;
  justify-self: end;
  visibility: hidden;
  
  &:hover {
    border: 1px solid ${props => props.color};
    border-radius: 2px;
    padding: 2px 4px;
  }`