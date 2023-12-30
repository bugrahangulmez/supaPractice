import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';
import {CreateTodo} from '../screen';

export default function TabBarNav() {
  type TabBarParamList = {
    Main: undefined;
    Create: undefined;
  };

  const TabBar = createBottomTabNavigator<TabBarParamList>();
  return (
    <TabBar.Navigator>
      <TabBar.Screen name="Main" component={StackNav} />
      <TabBar.Screen name="Create" component={CreateTodo} />
    </TabBar.Navigator>
  );
}
