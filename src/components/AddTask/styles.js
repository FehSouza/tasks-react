import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 28px;
  display: flex;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const InputTask = styled.input`
  width: 100%;
  background-color: transparent;
  border-radius: 34px;
  border: none;
  outline: none;
  padding-left: 16px;
  box-sizing: border-box;
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.letterSecondary};
  &:hover {
    cursor: text;
  }
`;

export const ButtonAddTask = styled.button`
  width: 6em;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 700;
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
