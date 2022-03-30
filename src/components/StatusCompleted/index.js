import * as S from './styles';

export const StatusCompleted = ({ value, quantity }) => {
  return (
    <S.Container>
      <S.WrapperStatus>
        <S.TitleStatus>Concluídas</S.TitleStatus>
        <S.Status>{quantity}</S.Status>
      </S.WrapperStatus>
      <S.StatusEx>
        <S.StatusIn width={value}></S.StatusIn>
      </S.StatusEx>
    </S.Container>
  );
};
