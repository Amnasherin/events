import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <LinearGradient colors={['#DBF5F0', '#DBF5F0']} style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        
            <View style={styles.formView}>
            <Text style={styles.text}>
                Sign Up
            </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter your Email address'
        onChangeText={setMail}
        value={mail}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter your contact number'
        onChangeText={setPhone}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter name of your college'
        onChangeText={setCollege}
        value={college}
      />
      <TextInput
        style={styles.input}
        placeholder='create a password'
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm password'
        onChangeText={setConfirm}
        value={confirm}
      />
<View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-end'}}>
      <Pressable style={styles.btn} onPress={() => {
        navigation.navigate('UpcomingEvents');
      }}>
          <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => {
        navigation.navigate('Login');
      }}>
          <Text style={styles.btnText}>Login</Text>
      </Pressable>
      </View>
</View>
</KeyboardAwareScrollView>
</LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: '#000',
        borderRadius: 20,
        marginHorizontal: wp('1%'),
        paddingHorizontal: wp('5%'),
        paddingVertical: wp('2%'),
    },
    btnText: {
        fontSize: wp('3%'),
        color: '#fff',
        padding: wp('0.3%')
    },
    text: {
        fontSize: wp('12%'),
        color: '#ededed',
        alignSelf: 'center',
        marginBottom: wp('8%')
    },
    formView: {
        width: wp('85%'),
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        margin: wp('5%'),
        borderColor: 'transparent',
        borderWidth: 1,
        elevation: 3,
        padding: wp('7%'),
        marginTop: wp('10%')
    },
    input: {
      height: wp('12%'),
      margin: wp('3%'),
      borderWidth: 1.6,
      padding: wp('3%'),
      borderColor: '#fefefe',
      minWidth: wp('75%'),
      borderRadius: 25,
    },
    image: {
        height: hp('30%'),
        width: wp('65%'),
        alignSelf: 'flex-end',
        // borderBottomLeftRadius: wp('20%'),
        // borderBottomRightRadius: wp('55%'),
    },

})

export default SignUp;