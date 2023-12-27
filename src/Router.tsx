import {NavigationContainer} from '@react-navigation/native';
import StackNav from './navigation/StackNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNav />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
