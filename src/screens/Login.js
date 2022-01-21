import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const storeData = async (value) => {
        console.log(value);
        try {
          await AsyncStorage.setItem('@storage_Key', JSON.stringify(value))
        } catch (e) {
            console.log(e, 'error');
        }
      }

    return (
    <LinearGradient colors={['white', '#ededed', '#E1FAFF', '#C2F5FD']} style={{flex: 1}}>
    <KeyboardAwareScrollView>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'data:image/jpeg;base64,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'}} />
            <View style={styles.innerView}>
              <Text style={{fontSize: wp('10%'), color: '#fff', fontFamily: 'serif', bottom: wp('20')}}>
                Login
              </Text>
      <TextInput
        style={styles.input}
        placeholder='UserName'
        onChangeText={setUserName}
        value={userName}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
      />
      <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: wp('2.5%')}}>Don't have an account ?</Text>
            <Pressable style={{marginLeft: wp('1%') }} onPress={() => {
              navigation.navigate('SignUp');
              console.log('user clicked');
            }}>
             <Text style={{fontSize: wp('2.8%'), color: 'blue'}}>SignUp</Text>
             </Pressable>
             </View>
      <Pressable style={styles.btn} onPress={() => {
          if (userName !== '' && password !== '') {
            console.log(userName, password);
            storeData(false);
          }
          navigation.navigate('UpcomingEvents')
      }}>
          <Text style={{color: '#fff'}}>Login</Text>
      </Pressable>
            </View>
            
        </View>
            </KeyboardAwareScrollView>
            </LinearGradient>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        padding: wp('3%'),
        backgroundColor: '#6699ff',
        borderRadius: 15,
        width: wp('25%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('3%'),
    },
    image: {
        height: hp('40%'),
        width: wp('95%'),
        borderBottomLeftRadius: wp('55%'),
        borderBottomRightRadius: wp('55%'),
    },
    input: {
      height: wp('12%'),
      margin: wp('3%'),
      borderWidth: 1.6,
      padding: wp('3%'),
      borderColor: '#fefefe',
      minWidth: wp('70%'),
      borderRadius: 25,
    },
    innerView: {
        bottom: wp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('10%'),
        borderColor: 'transparent',
        borderWidth: 1,
        width: wp('84%'),
        padding: wp('6%'),
        height: hp('60%'),
        elevation: 3,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        backgroundColor: 'transparent',
        // shadowRadius: 10,
        borderRadius: 2
        
    }

})

export default Login;