/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Modal} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoggedService} from '../redux/actionCreators/LogActionCreator';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

const Settings = ({navigation}) => {
    const [alertIcon, setalertIcon] = useState('');
    const [alertTitle, setalertTitle] = useState('');
    const [alertMessage, setalertMessage] = useState('');
    const [alertButtons, setalertButtons] = useState([
      {
        text: 'OK',
        onPress: () => {
          setModalVisible(false);
        },
      },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
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
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Profile', {screen: 'Settings'});
        }}>
        <Text style={styles.text}>Profile</Text>
      </Pressable>
      {/* <View style={styles.seperator} /> */}
      <Pressable
        onPress={() => {
          navigation.navigate('ChangePassword');
        }}>
        <Text style={styles.text}>Change Password</Text>
      </Pressable>
      {/* <View style={styles.seperator} /> */}
      <Pressable
        onPress={() => {
            setModalVisible(true)
        }}>
        <Text style={styles.text}>Logout</Text>
      </Pressable>
      {modalVisible === true ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Icon
                  name="image"
                  style={styles.modalText}
                  color={'red'}
                  size={wp('13%')}
                />
                <Text style={[styles.modalText, {fontWeight: 'bold'}]}>
                  {alertTitle}
                </Text>
                <Text style={[styles.modalText, {paddingBottom: wp('2%')}]}>
                  {'Do you want to logout ?'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: wp('3%'),
                  }}>
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      console.log('clicked');
                      dispatch(LoggedService(false));
                    }}>
                    <Text style={[styles.textStyle, {marginHorizontal: wp('3%')}]}>YES</Text>
                  </Pressable>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: wp('2%'),
  },
  header: {
    flexDirection: 'row',
    paddingBottom: wp('2%'),
    alignItems: 'center',
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
    paddingTop: wp('1%'),
  },
  text: {
    fontSize: wp('4.5%'),
    paddingLeft: wp('3%'),
    paddingTop: wp('3%'),
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
});

export default Settings;
