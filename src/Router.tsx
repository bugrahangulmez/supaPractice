import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ReduxProvider from './redux/ReduxProvider';
import TabBarNav from './navigation/TabBarNav';

function Main() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TabBarNav />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider>
      <Main />
    </ReduxProvider>
  );
}
