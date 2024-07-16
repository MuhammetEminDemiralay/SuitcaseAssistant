import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';

const { width, height } = Dimensions.get("window")

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%'
  },
});
