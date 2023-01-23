import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar,Platform, SafeAreaView,StyleSheet, Text, View } from 'react-native';

  // const isAndroid =Platform.OS==='android';
  console.log(StatusBar.currentHeight)

export default function App() {
  return (
  <>
    <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight}}>
      <View style={{padding:16,justifyContent:'center',backgroundColor:'blue'}}>
       <Text>search</Text>
      </View>
     <View style={{flex:1,justifyContent:'center',backgroundColor:'grey'}}>
       <Text>body</Text>
     </View>
    </SafeAreaView>
    <ExpoStatusBar style ='auto'/>
     
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
