import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useState } from 'react'
import { CreateHolidayScreen, HomeScreen, SuitcaseScreen, TravelScreen } from '../screen';
import { Entypo, FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons/';
import { BackHandler, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabBar } from '../redux/travelSlice';

const { width, height } = Dimensions.get("window")

const UserStack = () => {
  const Tab = createBottomTabNavigator();
  const dispatch: any = useDispatch();
  const { activeTabBar, tabBarVisible } = useSelector((state: any) => state.travel)

  useEffect(() => {

    const backAction = () => {
      alert('Geri butonuna basıldı!');
      return true; // Varsayılan geri butonunu engelle
    };

    BackHandler.addEventListener('hardwareBackPress', backAction)
  }, [])

  return (
    < Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#02c39a',
        tabBarStyle: tabBarVisible == true ? { height: height * 0.075 } : { height: 0 }
      }}
    >
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={30} color={activeTabBar == 'home' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: () => {
            dispatch(setActiveTabBar('home'))
          }
        }}
      />
      <Tab.Screen
        name='suitcase'
        component={SuitcaseScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="suitcase-rolling" size={30} color={activeTabBar == 'suitcase' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: () => {
            dispatch(setActiveTabBar('suitcase'))
          }
        }}
      />
      <Tab.Screen
        name='earth'
        component={TravelScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="earth" size={35} color={activeTabBar == 'earth' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: () => {
            dispatch(setActiveTabBar('earth'))
          }
        }}
      />
      <Tab.Screen
        name='createHoliday'
        component={CreateHolidayScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="table" size={30} color={activeTabBar == 'createHoliday' ? '#fff' : 'black'} />
          )
        }}
        listeners={{
          tabPress: () => {
            dispatch(setActiveTabBar('createHoliday'))
          }
        }}
      />
    </Tab.Navigator >
  )
}

export default UserStack
