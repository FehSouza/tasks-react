import withoutTasks from '../../assets/withoutTasks.svg';
import * as S from './styles';

export const WithoutTasks = () => {
  return (
    <S.Container>
      <S.ImgWithoutTasks
        src={withoutTasks}
        alt="A imagem consiste em um desenho, sendo que do lado direito há uma lista de três tarefas (a primeira marcada como feita, e as outras duas ainda para serem realizadas), e no canto esquerdo há uma mulher morena representada de perfil, de calça preta e camisa branca, segurando em uma das mãos um circulo com o fundo na cor azul, e no meio do círculo há o desenho de um check na cor branca."
      ></S.ImgWithoutTasks>
      <S.SpanWithoutTasks>Não há tarefas cadastradas ainda.</S.SpanWithoutTasks>
    </S.Container>
  );
};
