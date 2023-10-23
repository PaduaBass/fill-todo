import 'styled-components';
import type theme from './light';

type ThemeType = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType { }
}
