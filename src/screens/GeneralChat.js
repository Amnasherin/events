/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from './chat/Chats';
import Community from './chat/Community';

const Tab = createMaterialTopTabNavigator();

const GeneralChat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={wp('7%')}
          style={styles.arrow}
          onPress={() => {
            navigation.navigate('UpcomingEvents');
          }}
        />
        <Text style={styles.headerText}>Sajmal</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Chats"
        tabBarOptions={{
          inactiveTintColor: '#9b9b9b',
          activeTintColor: '#1d1059',
          labelStyle: {fontSize: wp('3.3%'), fontWeight: 'bold'},
          style: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
          },
          indicatorStyle: {
            backgroundColor: '#1d1059',
            width: wp('40%'),
            marginLeft: wp('5%'),
          },
        }}>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Community" component={Community} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: wp('2%'),
    alignItems: 'center',
    paddingHorizontal: wp('1%'),
  },
  arrow: {
    padding: wp('1%'),
    marginRight: wp('3%'),
  },
  headerText: {
    fontSize: wp('4.5%'),
    color: '#000',
    fontWeight: 'bold'
  },
});

export default GeneralChat;
