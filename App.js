/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, 
  Pressable
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Routes from './src/Routes/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UpcomingEvents from './src/screens/UpcomingEvents';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import PastEvents from './src/screens/PastEvents';
import Gallery from './src/screens/Gallery';
import GeneralChat from './src/screens/GeneralChat';
import Settings from './src/screens/Settings';
import PostEvents from './src/screens/PostEvent';
import Profile from './src/screens/Profile';
import EventReport from './src/screens/EventReport';
import ChangePassword from './src/screens/ChangePassword';
import Registration from './src/screens/Registration';

const App = () => {
  const [login, setLogin] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      const val = JSON.parse(value);
      if(val !== null) {
        setLogin(val);
        console.log(login, 'login');
      }
    } catch(e) {
      // error reading value
    }
  }
  
  const BottomTab = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: '#51bdb9',
              inactiveTintColor: '#095e5c',
              showLabel: false,
              style: {
                backgroundColor: 'transparent',
                position: 'absolute',
                elevation: 0,
                borderTopWidth: 0,
              },
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="home-outline"
                    size={wp('7%')}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="PastEvents"
              component={PastEvents}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="file-clock-outline"
                    size={wp('7%')}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="PostEvents"
              component={PostEvents}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="plus-circle-outline"
                    size={wp('7%')}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Gallery"
              component={Gallery}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="image"
                    size={wp('7%')}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                  <Icon
                    name="account-settings"
                    size={wp('7%')}
                    color={color}
                  />
                ),
              }}
            />
            </Tab.Navigator>
            </SafeAreaView>
    )
  }
  const Home = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} component={UpcomingEvents} name="UpcomingEvents" />
        <Stack.Screen options={{headerShown: false}} component={PastEvents} name="PastEvents" />
        <Stack.Screen options={{headerShown: false}} component={Login} name="Login" />
        <Stack.Screen options={{headerShown: false}} component={SignUp} name="SignUp" />
        <Stack.Screen options={{headerShown: false}} component={PostEvents} name="PostEvents" />
        <Stack.Screen options={{headerShown: false}} component={Gallery} name="Gallery" />
        <Stack.Screen options={{headerShown: false}} component={EventReport} name="EventReport" />
        <Stack.Screen options={{headerShown: false}} component={Profile} name="Profile" />
        <Stack.Screen options={{headerShown: false}} component={ChangePassword} name="ChangePassword" />
        <Stack.Screen options={{headerShown: false}} component={Registration} name="Registration" />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {login === true ? 
        <>
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        </> :
        <Stack.Screen options={{headerShown: false}} name="BottomTab" component={BottomTab} /> }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
