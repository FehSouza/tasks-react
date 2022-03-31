import { theme } from './theme';

type ThemeInterface = typeof theme['dark' | 'light'];

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
