/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { LoggedService } from '../redux/actionCreators/LogActionCreator';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from 'react-native-vector-icons/FontAwesome';
import eventImage from '../images/eventImg2.jpg';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [alertName, setalertName] = useState(false);
  const [alertPass, setalertPass] = useState(false);
  const dispatch = useDispatch();

  const storeData = async (name, pass) => {
    console.log('hey');
    try {
      const val = await AsyncStorage.getItem('@storage_Key');
      const val2 = JSON.parse(val);
      val2.map((item) => {
        console.log(item);
        if (name === item.Name && pass === item.password) {
          dispatch(LoggedService(true));
        } else {
        }
      })
    } catch (e) {
      console.log(e, 'error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={wp('8%')}
          style={styles.arrow}
          color={'#1d1059'}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: wp('70%'),
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}>
          <View style={{backgroundColor: '#ced6eb', alignSelf: 'flex-start', height: wp('25%'), width: wp('25%'), borderBottomEndRadius: 100}}/>
          
          {/* <Image source={eventImage} style={{borderRadius: 35, marginTop: wp('15%'), height: wp('45%'), width: wp('65%')}} /> */}
        </View>
        <View style={{borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingTop: wp('5%'), backgroundColor: '#fff', paddingBottom: wp('45%')}}>
        <Text style={[styles.text, {paddingLeft: wp('5%')}]}>Login</Text>
        <View style={{paddingBottom: wp('10%'), padding: wp('3%')}}>
          <View style={styles.rowView}>
            <Font
              style={{
                padding: 10,
              }}
              name="user"
              size={wp('6%')}
              color="#000"
            />
            <TextInput
              style={styles.inp}
              placeholder= {alertName === true ? 'Username...' : 'Username'}
              placeholderTextColor={alertName === true ? '#e3141e' : 'grey'}
              onChangeText={setUserName}
              value={userName}
              onBlur={() => {
                if (userName.length === 0) {
                  setalertName(true);
                } else {
                  setalertName(false);
                }
              }}
            />
          </View>
          <View style={styles.rowView}>
            <Icon
              style={{
                padding: 10,
              }}
              name="lock"
              size={wp('5%')}
              color="#000"
            />
            <TextInput
              style={styles.inp}
              placeholder= {alertPass === true ? 'Password...' : 'Password'}
              placeholderTextColor={alertPass === true ? '#e3141e' : 'grey'}
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}
              onBlur={() => {
                if (password.length === 0) {
                  setalertPass(true);
                } else {
                  setalertPass(false);
                }
              }}
            />
          </View>
          </View>
            <Pressable
              style={styles.btn}
              onPress={() => {
                if (userName !== '' && password !== '') {
                  storeData(userName, password);
                }
              }}>
              <Text style={{color: '#fff'}}>Login</Text>
            </Pressable>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingTop: wp('4%'),
            }}>
            <Text style={styles.btnText}>Don't have an account ? </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={{paddingBottom: wp('5%')}}>
              <Text style={[styles.btnText, {color: '#1d1059'}]}>Sign Up</Text>
            </Pressable>
            </View>
            </View>
      </KeyboardAwareScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#bcc9eb',
  },
  btnText: {
    fontSize: wp('3%'),
    padding: wp('0.3%'),
  },
  header: {
    // flexDirection: 'row',
    paddingBottom: wp('2%'),
    // alignItems: 'center',
    marginTop: wp('2%'),
    position: 'absolute',
  },
  arrow: {
    padding: wp('1%'),
    marginRight: wp('3%'),
    marginLeft: wp('2%'),
    marginTop: wp('3%'),
    zIndex: 10
  },
  headerText: {
    fontSize: wp('4%'),
    color: '#189AB4',
  },
  rowView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderBottomColor: '#e5e3e8',
    borderBottomWidth: 1,
    marginHorizontal: wp('1%'),
    width: wp('90%')
  },
  text: {
    fontSize: wp('7%'),
    color: '#1d1059',
    alignSelf: 'flex-start',
    marginBottom: wp('8%'),
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#1d1059',
    borderRadius: 10,
    marginHorizontal: wp('1%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('3%'),
    width: wp('85%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    height: hp('40%'),
    width: wp('95%'),
    borderBottomLeftRadius: wp('55%'),
    borderBottomRightRadius: wp('55%'),
  },
  inp: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424242',
    height: wp('12%'),
    margin: wp('2%'),
    padding: wp('3%'),
    borderColor: 'transparent',
    minWidth: wp('70%'),
  },
});

export default Login;
