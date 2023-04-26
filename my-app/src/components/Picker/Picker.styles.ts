import styled from "styled-components";

interface Props {
  active: boolean;
}

export const Select = styled.select`
appearance: none;
  background-color: #ffffff;
  border: 1.5px solid #4056A1;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 400;
  padding: 4px 8px;
  background: transparent;

  &:hover {
    border-color: #aaaaaa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #dddddd;
  }

  @media (max-width: 500px) {
    flex-basis: 40%;
  }
  
`

export const SelectWrapper = styled.div`
  display: flex;
  gap: 2px;

  @media (max-width: 768px) {
    width: 95%;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2px;
  }
`