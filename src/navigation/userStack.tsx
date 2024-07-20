import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import { CreateHolidayScreen, HomeScreen, SuitcaseScreen } from '../screen';
import { Entypo, FontAwesome, FontAwesome6 } from '@expo/vector-icons/';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window")

const UserStack = () => {
  const Tab = createBottomTabNavigator();
  const [data, setData] = useState('home')

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#02c39a',
        tabBarStyle: { height: height * 0.075 }
      }}
      screenListeners={{
      }}
    >
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={30} color={data == 'home' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: ({ target }) => {
            setData('home')
          }
        }}
      />
      <Tab.Screen
        name='suitcase'
        component={SuitcaseScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="suitcase-rolling" size={30} color={data == 'suitcase' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: ({ target }) => {
            setData('suitcase')
          }
        }}
      />
      <Tab.Screen
        name='createHoliday'
        component={CreateHolidayScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="table" size={30} color={data == 'createHoliday' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: ({ target }) => {
            setData('createHoliday')
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default UserStack
