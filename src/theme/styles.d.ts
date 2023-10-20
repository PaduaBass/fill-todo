import 'styled-components';
import theme from './global';

type ThemeType = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType { }
}
