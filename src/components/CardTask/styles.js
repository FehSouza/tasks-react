import styled from 'styled-components';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

export const Container = styled.div`
  width: 90%;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  border: 1px solid transparent;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.card};
  }
`;

export const CheckIcon = styled(FaCheck)`
  color: #27e69a;
`;

export const DeleteIcon = styled(FaTrashAlt).attrs({ tabIndex: 0 })`
  margin-left: 12px;
  height: 30px;
  color: ${({ theme }) => theme.colors.delete};
  padding: 4px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.deleteA};
    transition-duration: 250ms;
  }
  &:focus {
    height: 24px;
    color: ${({ theme }) => theme.colors.deleteA};
    padding: 4px;
  }
`;

export const TextTask = styled.span`
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.letterPrimary};
  flex: 1;
  margin: 12px;
`;

export const CheckTask = styled.div.attrs({ tabIndex: 0 })`
  min-width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 6px;
  background-color: transparent;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.card};
    transition-duration: 250ms;
  }
`;
