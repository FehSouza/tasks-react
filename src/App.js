import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './AppStyles';
import { Logo, ThemeColors } from './components/index.js';
import { ThemeModeProvider, useThemeMode } from './context/useThemeMode';
import { TodoProvider } from './context/useTodo';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/globalStyle';
import { theme } from './styles/theme';

const Root = () => {
  const [status] = useThemeMode()
  const themeName = useMemo(() => (status ? 'light' : 'dark'), [status]);
  return (
    <ThemeProvider theme={theme[themeName]}>
      <GlobalStyle />
      <S.Container>
        <Logo />
        <TodoProvider>
          <Home />
        </TodoProvider>
        <ThemeColors/>
      </S.Container>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeModeProvider>
      <Root />
    </ThemeModeProvider>
  );
}

export default App;
