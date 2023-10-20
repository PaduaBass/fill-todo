import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import RootRoutes from './src/routes/Routes';
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_700Bold, } from '@expo-google-fonts/montserrat'
import useThemeStore, { Theme } from './src/store/themeStore';

export default function App() {
  const { themeMode, theme } = useThemeStore();
   let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <StatusBar style={theme === Theme.LIGHT ? 'auto' : 'light'} />
      <RootRoutes />
    </ThemeProvider>
   
  );
}
