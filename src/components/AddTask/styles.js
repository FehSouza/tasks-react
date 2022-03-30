import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  min-height: 40px;
  background-color: ${(props) => props.theme.color.backgroundSecondary};
  border-radius: 34px;
  border: 1px solid ${(props) => props.theme.color.backgroundSecondary};
  margin-top: 28px;
  display: flex;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.color.primary};
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
  color: ${(props) => props.theme.color.letterSecondary};
  &:hover {
    cursor: text;
  }
`;

export const ButtonAddTask = styled.button`
  width: 6em;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 34px;
  border: 1px solid ${(props) => props.theme.color.primary};
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.color.letterPrimary};
  outline: none;
  &:focus {
    border-color: ${(props) => props.theme.color.secondary};
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.primaryA};
    border: 1px solid ${(props) => props.theme.color.primaryA};
    transition-duration: 250ms;
  }
`;
