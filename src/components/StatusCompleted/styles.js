import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const WrapperStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TitleStatus = styled.span`
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.letterPrimary};
`;

export const Status = styled.span`
  font-family: 'Signika', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.letterPrimary};
`;

export const StatusEx = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.colors.statusSecondary};
  border-radius: 10px;
`;

export const StatusIn = styled.div`
  height: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.statusPrimary};
  transition-duration: 250ms;
  width: calc(${(props) => props.width}% - 2px);
`;
