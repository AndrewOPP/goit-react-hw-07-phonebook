import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: azure;
  height: 44vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  max-width: 960px;
`;

export const StyledH1 = styled.h1`
  font-size: 50px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

export const CustomButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 150px;
  height: 46px;
  border: 1px solid black;
  border-radius: 8px;
  transition: all 300ms;
  font-size: 20px;

  &:hover {
    background-color: white;
  }
`;
