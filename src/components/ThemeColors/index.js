import * as S from './styles.js';

export const ThemeColors = ({ status, toggle }) => {
  const handlePressEnter = () => {
    return (e) => e.key === 'Enter' && toggle();
  };

  return (
    <S.Container>
      <S.TextDark onClick={toggle}>Dark</S.TextDark>
      <S.Switch onClick={toggle} onKeyDown={handlePressEnter()}>
        <S.SwitchInt active={status} />
      </S.Switch>
      <S.TextLight onClick={toggle}>Light</S.TextLight>
    </S.Container>
  );
};
