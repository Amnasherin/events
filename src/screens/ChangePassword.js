import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChangePassword = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>ChangePassword</Text>
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
        padding: wp('1%')
    },
    headerText: {
        fontSize: wp('5%')
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

export default ChangePassword;