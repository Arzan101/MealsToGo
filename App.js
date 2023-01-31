import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';

  // const isAndroid =Platform.OS==='android';
 

export default function App() {
  return (
  <>
    <RestaurantScreen/>
    <ExpoStatusBar style ='auto'/>
     
  </>
  );
}


