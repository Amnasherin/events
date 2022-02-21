/* eslint-disable prettier/prettier */
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
  Pressable,
  Image
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import UpcomingEvents from './src/screens/UpcomingEvents';
import UpcomingEvents from '../screens/UpcomingEvents';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PastEvents from '../screens/PastEvents';
import Gallery from '../screens/Gallery';
import GeneralChat from '../screens/GeneralChat';
import Settings from '../screens/Settings';
import PostEvents from '../screens/PostEvent';
import Profile from '../screens/Profile';
import EventReport from '../screens/EventReport';
import ChangePassword from '../screens/ChangePassword';
import Registration from '../screens/Registration';
import {connect} from 'react-redux';
import { LoggedService } from '../redux/actionCreators/LogActionCreator';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import ChatBox from '../screens/chat/ChatBox';
import SearchFilter from '../screens/SearchFilter';

const Routes = () => {
  const states = useSelector((state) => state);
  const [login, setLogin] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    // getData();
    LogService();
    console.log(states.IsLoggedReducer.userData, 'states.IsLoggedReducer.userData')
  }, [states.IsLoggedReducer.userData]);
  const isLoggedUser = (val) => dispatch(LoggedService(val));

  const LogService = () => {
    if (states.IsLoggedReducer.userData === true) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');
  //     const val = JSON.parse(value);
  //     if (val !== null) {
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const BottomTab = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarInactiveTintColor: '#000',
            tabBarActiveTintColor: '#FFFFFF',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              // backgroundColor: '#ced6eb',
              backgroundColor: '#1d1059',
              position: 'absolute',
              elevation: 0,
              borderTopColor: 'transparent',
              bottom: wp('1%'),
              right: wp('4%'),
              left: wp('4%'),
              height: wp('12%'),
              borderRadius: 35,
              opacity: 0.6,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="home-outline" size={wp('7%')} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="GeneralChat"
            component={GeneralChat}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="chat" size={wp('7%')} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="PostEvents"
            component={PostEvents}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                // <View style={{backgroundColor: '#1d1059', borderRadius: 100, bottom: wp('5%'), zIndex: 10, height: wp('13%'), width: wp('13%'), justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name="plus-circle-outline"
                  size={wp('12%')}
                  color={'powderblue'}
                />
                // </View>
              ),
            }}
          />
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="image" size={wp('7%')} color={color} />
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
    );
  };
  const Home = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={UpcomingEvents}
          name="UpcomingEvents"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={PastEvents}
          name="PastEvents"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={Login}
          name="Login"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={SignUp}
          name="SignUp"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={PostEvents}
          name="PostEvents"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={Gallery}
          name="Gallery"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={EventReport}
          name="EventReport"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={Profile}
          name="Profile"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={ChangePassword}
          name="ChangePassword"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={Registration}
          name="Registration"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={ChatBox}
          name="ChatBox"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={SearchFilter}
          name="SearchFilter"
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {login === true ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="SignUp"
              component={SignUp}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTab"
            component={BottomTab}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  userData: state.IsLoggedReducer.userData,
});
export default connect(mapStateToProps)(Routes);
