import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImgWithoutTasks = styled.img`
  width: 300px;

  @media (max-width: 500px) {
    & {
      width: 60%;
    }
  }
`;

export const SpanWithoutTasks = styled.span`
  font-family: 'Signika', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.color.letterPrimary};
  margin-top: 4em;
`;
