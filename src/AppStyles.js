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
