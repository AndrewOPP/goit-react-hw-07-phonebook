import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const StyledHeader = styled.header`
  background-color: thistle;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: all 300ms;
  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  color: black;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 6px;
  width: 150px;
  height: 40px;
  transition: all 300ms;
  &:hover {
    background-color: white;
  }
`;

export const StyledP = styled.p`
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
