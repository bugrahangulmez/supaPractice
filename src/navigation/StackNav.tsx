import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CreateTodo, Home, SignIn, SignUp} from '../screen';

type StackNavParamList = {
  Home: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Create: undefined;
};

export type StackNavScreenProps = NativeStackScreenProps<StackNavParamList>;

export default function StackNav() {
  const Stack = createNativeStackNavigator<StackNavParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={CreateTodo} />
    </Stack.Navigator>
  );
}
