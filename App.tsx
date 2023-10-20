import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/global';
import RootRoutes from './src/routes/Routes';
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_700Bold, } from '@expo-google-fonts/montserrat'

export default function App() {

   let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <RootRoutes />
    </ThemeProvider>
   
  );
}
