import { create } from 'zustand';
import light from '../theme/light';
import dark from '../theme/dark';
import { MMKV } from 'react-native-mmkv';
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";


export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type Mode = typeof light;

interface State {
  theme: Theme.DARK | Theme.LIGHT;
  themeMode: Mode;
  toggleTheme: () => void;
}

export const appPersistStorage = new MMKV({ id: "theme-storage" });

const zustandMMKVStorage: StateStorage = {
  setItem: (name, value) => {
    appPersistStorage.set(name, value);
  },
  getItem: (name) => {
    const value = appPersistStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    appPersistStorage.delete(name);
  },
};

const useThemeStore = create<State, [["zustand/persist", State]]>(persist(
  (set) => ({
    theme: Theme.LIGHT,
    themeMode: light,
    toggleTheme: () => {
      set(state => ({ theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT, themeMode: state.theme === Theme.LIGHT ? dark : light }))
    }
  }), {
  name: 'theme-storage',
  storage: createJSONStorage(() => zustandMMKVStorage),
}
));


export default useThemeStore;