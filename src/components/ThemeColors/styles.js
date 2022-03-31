import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
`;

export const TextDark = styled.label`
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.letterPrimary};
  user-select: none;
  margin-right: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const Switch = styled.div.attrs({ tabIndex: 0 })`
  width: 36px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
  }
`;

export const SwitchInt = styled.div`
  width: 16px;
  height: 16px;
  margin-left: ${({ active }) => (active ? 16 : 0)}px;
  transition-duration: 250ms;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const TextLight = styled.label`
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.letterPrimary};
  margin-left: 12px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
