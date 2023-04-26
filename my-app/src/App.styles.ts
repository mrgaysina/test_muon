import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  padding: 0;
  width: 60%;
  row-gap: 10px;
`

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: max-content;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #4056A1;
  margin_bottom: 20px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    align-items: flex-start;
    flex-direction: column;
    border-bottom: none;
    gap: 10px;
    margin_bottom: 20px;
  }
`
