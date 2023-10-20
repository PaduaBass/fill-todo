import { create } from 'zustand';
import light from '../theme/light';
import dark from '../theme/dark';


export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type Mode = typeof light;

type State = {
  theme: Theme.DARK | Theme.LIGHT;
  themeMode: Mode;
  toggleTheme: () => void;
}

const useThemeStore = create<State>((set) => ({
  theme: Theme.LIGHT,
  themeMode: light,
  toggleTheme: () => {
    set(state => ({ theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT, themeMode: state.theme === Theme.LIGHT ? dark : light }))
  }
}));


export default useThemeStore;