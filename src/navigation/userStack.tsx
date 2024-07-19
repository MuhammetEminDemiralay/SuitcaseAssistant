import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { CreateHolidayScreen, HomeScreen } from '../screen';
import { Entypo, FontAwesome } from '@expo/vector-icons/';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window")

const UserStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#02c39a',
        tabBarStyle: { height: height * 0.075 }
      }}
    >
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={30} color="black" />
          )
        }}
      />
      <Tab.Screen
        name='createHoliday'
        component={CreateHolidayScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="table" size={30} color="black" />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default UserStack
