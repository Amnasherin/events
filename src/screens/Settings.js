import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-left' size={wp('7%')} style={styles.arrow} onPress={() => {
                    navigation.navigate('UpcomingEvents')
                }} />
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <Pressable onPress={() => {
                navigation.navigate('Profile');
            }}>
                <Text style={styles.text}>
                    Profile
                </Text>
            </Pressable>
            {/* <View style={styles.seperator} /> */}
            <Pressable onPress={() => {
                navigation.navigate('ChangePassword');
            }}>
                <Text style={styles.text}>
                    Change Password
                </Text>
            </Pressable>
            {/* <View style={styles.seperator} /> */}
            <Pressable>
                <Text style={styles.text}>
                    Logout
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: wp('2%')
    },
    header: {
        flexDirection: 'row',
        paddingBottom: wp('2%'),
        alignItems: 'center'
    },
    arrow: {
        padding: wp('1%'),
        marginRight: wp('3%'),
    },
    headerText: {
        fontSize: wp('5%'),
        color: '#189AB4',
    },
    seperator: {
      borderBottomColor: '#ECECEC',
      borderBottomWidth: 1,
      paddingTop: wp('1%')
    },
    text: {
        fontSize: wp('4.5%'),
        paddingLeft: wp('3%'),
        paddingTop: wp('3%')
    }
})

export default Settings;