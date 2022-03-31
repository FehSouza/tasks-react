import styled from 'styled-components';

export const Container = styled.button`
  width: 16em;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.letterPrimary};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryA};
    border: 1px solid ${({ theme }) => theme.colors.primaryA};
    transition-duration: 250ms;
  }
`;
