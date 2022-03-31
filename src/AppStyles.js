import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleTasks = styled.span`
  width: 90%;
  align-items: flex-start;
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.letterPrimary};
  margin-top: 28px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
