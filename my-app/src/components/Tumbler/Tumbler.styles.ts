import styled from "styled-components";

interface Props {
  active: boolean;
}

export const TumblerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%`

export const TumblerButton = styled.button<Props>`
  width: 50%;
  background: ${(props) => props.active ? ' #4056A1' : '#747474'};
  border: 1px solid ${(props) => props.active ? ' #4056A1' : '#747474'};
  border-radius: 2px;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  &:hover {
    padding: 0;
    margin: 0;
    background: white;
    color: ${(props) => props.active ? ' #4056A1' : '#747474'};
    border: 1px solid ${(props) => props.active ? ' #4056A1' : '#747474'};
  }
  `
