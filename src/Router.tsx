import {NavigationContainer} from '@react-navigation/native';
import StackNav from './navigation/StackNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ReduxProvider from './redux/ReduxProvider';

function Main() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNav />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );
}
