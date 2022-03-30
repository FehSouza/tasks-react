import styled from 'styled-components';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

export const Container = styled.div`
  width: 90%;
  min-height: 50px;
  background-color: ${(props) => props.theme.color.card};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.card};
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.color.primary};
  }
`;

export const CheckIcon = styled(FaCheck)`
  color: #27e69a;
`;

export const DeleteIcon = styled(FaTrashAlt).attrs({ tabIndex: 0 })`
  margin-left: 12px;
  height: 30px;
  color: ${(props) => props.theme.color.delete};
  padding: 4px;
  border: 1px solid ${(props) => props.theme.color.card};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.deleteA};
    transition-duration: 250ms;
  }
  &:focus {
    height: 24px;
    color: ${(props) => props.theme.color.deleteA};
    padding: 4px;
  }
`;

export const TextTask = styled.span`
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.color.letterPrimary};
  flex: 1;
  margin: 12px;
`;

export const CheckTask = styled.div.attrs({ tabIndex: 0 })`
  min-width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.color.backgroundPrimary};
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.card};
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.color.backgroundPrimaryA};
    transition-duration: 250ms;
  }
`;
