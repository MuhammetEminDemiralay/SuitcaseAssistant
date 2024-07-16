import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeScreen } from '../screen';


const UserStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default UserStack
