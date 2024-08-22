import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, StatusBarStyle, SafeAreaView } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const { width, height } = Dimensions.get("screen")

export default function App() {


  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
