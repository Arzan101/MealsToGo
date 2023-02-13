import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { theme } from './src/infrastructure/theme';

  // const isAndroid =Platform.OS==='android';
 

export default function App() {
  return (
  <>
  <ThemeProvider theme ={theme}>
    <RestaurantScreen/>
  </ThemeProvider>
    <ExpoStatusBar style ='auto'/>
     
  </>
  );
}


