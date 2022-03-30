import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const Logo = styled.img`
  height: 24px;
`;

export const Title = styled.h1`
  font-family: 'Signika', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.color.letterPrimary};
  margin-left: 8px;
`;
