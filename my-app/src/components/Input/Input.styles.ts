import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  border: none;
  padding: 0 10px;
  
  @media (max-width: 768px) {
    border-bottom: 1px solid #4056A1;
    width: 95%;
    box-sizing: border-box;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #999;
  margin-right: 4px;
  height: 8px;
  
`;

export const CustomInput = styled.input`
  flex: 1;
  border: none;
  font-size: 10px;
  font-weight: 400;
  color: #333;

  &:hover {
    outline: none;
  }
`;