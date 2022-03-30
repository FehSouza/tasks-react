import logo from '../../assets/logo.svg';
import * as S from './styles';

export const Logo = () => {
  return (
    <S.Container>
      <S.Logo
        src={logo}
        alt="A imagem consiste em um círculo com o fundo na cor azul, e no meio do círculo há o desenho de um raio na cor branca."
      ></S.Logo>
      <S.Title width={50}>Tasks</S.Title>
    </S.Container>
  );
};
