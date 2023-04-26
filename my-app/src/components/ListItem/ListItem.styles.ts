import styled from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #999;
  box-sizing: border-box;

  &:hover {
    z-index: 10;
    border: 1px solid #999;
    transform: scale(1.03);
    box-shadow: 4px 2px 2px grey;
  }
`

export const ListItemTime = styled.div`
  padding: 6px;
  font-size: 20px;
  font-weight: 400;
`

export const ListItemFlight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

export const ListItemCity = styled.div`
width: 150px;
`