import styled from 'styled-components';

export const Container = styled.button`
  width: 16em;
  height: 40px;
  background-color: ${props => props.theme.color.primary};
  border-radius: 34px;
  border: 1px solid ${props => props.theme.color.primary};
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.color.letterPrimary};
  outline: none;
  &:focus {
    border-color: ${props => props.theme.color.secondary};
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.color.primaryA};
    border: 1px solid ${props => props.theme.color.primaryA};
    transition-duration: 250ms;
  }
`;
