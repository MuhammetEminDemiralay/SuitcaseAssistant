import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import UserStack from './userStack';
import AuthStack from './authStack';
import SplashScreen from 'react-native-splash-screen';



const RootNavigation = () => {

    const isAuth = true;
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <NavigationContainer>
            {
                isAuth ? <UserStack /> : <AuthStack />
            }
        </NavigationContainer>

    )
}

export default RootNavigation
