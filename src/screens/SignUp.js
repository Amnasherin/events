/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Modal,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {LoggedService} from '../redux/actionCreators/LogActionCreator';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome';
import eventImage from '../images/eventImg1.png';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [alertName, setalertName] = useState(false);
  const [alertMail, setalertMail] = useState(false);
  const [alertPhone, setalertPhone] = useState(false);
  const [data, setdata] = useState([]);
  const [alertPass, setalertPass] = useState(false);
  const [alertConfirm, setalertConfirm] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [alertCollege, setalertCollege] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const InitialValidation = () => {
    if (name === '') {
      setalertName(true);
    } else if (mail === '') {
      setalertMail(true);
    } else if (college === '') {
      setalertCollege(true);
    } else if (phone === '') {
      setalertPhone(true);
    } else if (password === '') {
      setalertPass(true);
    } else if (confirm === '') {
      setalertConfirm(true);
    } else {
      submitFunction();
    }
  };

  const submitFunction = () => {
    const Array = {
      Name: name,
      EmailAdd: mail,
      contact: phone,
      collegeName: college,
      password: confirm,
    };
    data.push(Array);
    dispatch(LoggedService(true));
    storeData(data);
  };

  const storeData = async (value) => {
    console.log(value, 'valueeee');
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(value));
    } catch (e) {
      console.log(e, 'error');
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      const val = JSON.parse(value);
      if (val !== null) {
        setdata(val);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            // height: wp('65%'),
            alignItems: 'center',
            paddingBottom: wp('10%'),
            backgroundColor: '#bcc9eb',
            
          }}>
          <View style={{backgroundColor: '#7d92c9', alignSelf: 'flex-end', height: wp('25%'), width: wp('25%'), borderBottomLeftRadius: 100, marginLeft: wp('4%')}}/>
          <Image source={eventImage} style={{borderRadius: 30}} />
        </View>
        <View style={{borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingTop: wp('5%'), backgroundColor: '#fff'}}>
        <Text style={[styles.text, {paddingLeft: wp('5%')}]}>Sign Up</Text>
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
              placeholder= {alertName === true ? 'Username...' : "Username"}
              placeholderTextColor={alertName === true ? '#e3141e' : 'grey'}
              onChangeText={setName}
              value={name}
              onBlur={() => {
                if (name.length === 0) {
                  setalertName(true);
                } else {
                  setalertName(false)
                }
              }}
            />
          </View>
          <View style={styles.rowView}>
            <Icon
              style={{
                padding: 10,
              }}
              name="email"
              size={wp('5%')}
              color="#000"
            />
            <TextInput
              style={styles.inp}
              placeholder= {alertMail === true ? 'Email ID...' : "Email ID"}
              placeholderTextColor={alertMail === true ? '#e3141e' : 'grey'}
              onChangeText={setMail}
              value={mail}
              onBlur={() => {
                if (mail.length === 0) {
                  setalertMail(true);
                } else {
                  setalertMail(false)
                }
              }}
            />
          </View>
          <View style={styles.rowView}>
            <Icon
              style={{
                padding: 10,
              }}
              name="phone"
              size={wp('5%')}
              color="#000"
            />
            <TextInput
              style={styles.inp}
              placeholder= {alertPhone === true ? 'Contact Number...' : "Contact Number"}
              placeholderTextColor={alertPhone === true ? '#e3141e' : 'grey'}
              onChangeText={setPhone}
              value={phone}
              onBlur={() => {
                if (phone.length === 0) {
                  setalertPhone(true);
                } else {
                  setalertPhone(false)
                }
              }}
            />
          </View>
          <View style={styles.rowView}>
            <Font
              style={{
                padding: 10,
              }}
              name="institution"
              size={wp('5%')}
              color="#000"
            />
            <TextInput
              style={styles.inp}
              placeholder= {alertCollege === true ? 'College...' : "College"}
              placeholderTextColor={alertCollege === true ? '#e3141e' : 'grey'}
              onChangeText={setCollege}
              value={college}
              onBlur={() => {
                if (college.length === 0) {
                  setalertCollege(true);
                } else {
                  setalertCollege(false);
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
              placeholder= {alertPass === true ? 'Password...' : "Password"}
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
          <View style={styles.rowView}>
            <Icon
              style={{
                padding: 10,
              }}
              name="lock-check"
              size={wp('5%')}
              color="#000"
            />
            <TextInput
              style={styles.inp}
              placeholder= {alertConfirm === true ? 'Confirm Password...' : "Confirm Password"}
              placeholderTextColor={alertConfirm === true ? '#e3141e' : 'grey'}
              onChangeText={setConfirm}
              secureTextEntry={true}
              value={confirm}
              onBlur={() => {
                if (confirm.length === 0) {
                  setalertConfirm(true);
                } else {
                  setalertConfirm(false)
                }
              }}
            />
          </View>
            <Pressable
              style={styles.btn}
              onPress={() => {
                InitialValidation();
              }}>
              <Text style={[styles.btnText, {color: '#fff'}]}>Sign Up</Text>
            </Pressable>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingTop: wp('4%'),
            }}>
            <Text style={styles.btnText}>Already have an account ? </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={{paddingBottom: wp('5%')}}>
              <Text style={[styles.btnText, {color: '#1d1059'}]}>Login</Text>
            </Pressable>
          </View>
        </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcc9eb',
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderBottomColor: '#e5e3e8',
    borderBottomWidth: 1,
    marginHorizontal: wp('1%'),
    width: wp('90%')
  },
  btn: {
    backgroundColor: '#1d1059',
    // borderRadius: 10,
    marginHorizontal: wp('1%'),
    paddingHorizontal: wp('8%'),
    paddingVertical: wp('4%'),
    // width: wp('85%'),
    alignItems: 'center',
    marginTop: wp('8%'),
    borderRadius: 35,
  },
  btnText: {
    fontSize: wp('3%'),
    padding: wp('0.3%'),
  },
  text: {
    fontSize: wp('7%'),
    color: '#1d1059',
    alignSelf: 'flex-start',
    marginBottom: wp('8%'),
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: wp('5%'),
    paddingHorizontal: wp('5%'),
    paddingBottom: wp('3%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: wp('67%'),
  },
  textStyle: {
    color: '#000',
    fontWeight: 'normal',
    alignSelf: 'flex-end',
  },
  modalText: {
    textAlign: 'center',
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

export default SignUp;
