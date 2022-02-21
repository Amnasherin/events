/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image, Modal} from 'react-native';
import {TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import pro from './../images/profileimg.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Font from 'react-native-vector-icons/FontAwesome';
import eventImage from '../images/eventImg1.png';

const profile = ({navigation, route}) => {
  const [alertIcon, setalertIcon] = useState('');
  const [alertTitle, setalertTitle] = useState('');
  const [alertMessage, setalertMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setage] = useState('');
  const [confirm, setConfirm] = useState('');
  const [image, setImage] = useState('');
  const [screen, setscreen] = useState(route.params.screen);

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.8,
    }).then((image) => {
      setImage(image.path);
      console.log(image, 'img');
    });
  };

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
    }).then((image) => {
      setImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={wp('7%')}
          style={styles.arrow}
          onPress={() => {
            navigation.navigate(screen);
          }}
        />
        <Text style={styles.headerText}> Profile</Text>
      </View>
      {/* <View style={styles.seperator} /> */}
      <Pressable
        onPress={() => {
          setModalVisible(true);
          console.log('clicked');
        }}
        style={styles.camera}>
        <Image
          source={image === '' ? pro : {uri: image}}
          style={styles.image}
        />

        <Icon
          name="plus-circle"
          size={wp('10%')}
          color="blue"
          style={styles.camIcon}
        />
      </Pressable>

      <KeyboardAwareScrollView>
        {/* <View style={styles.innerView}> */}
        <View
          style={{
            // height: wp('65%'),
            alignItems: 'center',
            paddingBottom: wp('10%'),
          }}>
          <View style={{paddingBottom: wp('10%'), padding: wp('3%')}}>
            <View style={styles.rowView}>
              <TextInput
                style={styles.inp}
                placeholder="Username"
                onChangeText={setName}
                value={name}
              />
            </View>
            <View style={styles.rowView}>
              <TextInput
                style={styles.inp}
                placeholder="Email ID"
                onChangeText={setMail}
                value={mail}
              />
            </View>
            <View style={styles.rowView}>
              <TextInput
                style={styles.inp}
                placeholder="Contact Number"
                onChangeText={setPhone}
                value={phone}
              />
            </View>
            <View style={styles.rowView}>
              <TextInput
                style={styles.inp}
                placeholder="College"
                onChangeText={setCollege}
                value={college}
              />
            </View>
            <View style={styles.rowView}>
              <TextInput
                style={styles.inp}
                placeholder="Age"
                onChangeText={setage}
                value={age}
              />
            </View>
              <Pressable
                style={[styles.btn, {backgroundColor: '#1fd199'}]}
                onPress={() => {
                  // InitialValidation();
                }}>
                <Text style={{color: '#fff'}}>Save</Text>
              </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
                  {alertMessage}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: wp('3%'),
                  }}>
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      console.log('clicked');
                      takePhotoFromGallery();
                    }}>
                    <Text style={styles.textStyle}>Gallery</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      takePhoto();
                    }}>
                    <Text style={styles.textStyle}>Camera</Text>
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
    paddingLeft: wp('2%'),
  },
  arrow: {
    // padding: wp('1%'),
    // marginRight: wp('3%'),
    // marginLeft: wp('3%'),
    // backgroundColor: 'gray',
    // borderRadius: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // padding: wp('2%'),
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
    width: wp('90%'),
  },
  headerText: {
    fontSize: wp('5%'),
    color: '#000',
    fontWeight: 'bold',
    margin: wp('3%')
  },
  seperator: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    paddingTop: wp('3%'),
  },
  text: {
    fontSize: wp('4.5%'),
    paddingLeft: wp('3%'),
    paddingTop: wp('3%'),
  },
  innerView: {
    justifyContent: 'center',
  },
  input: {
    height: wp('12%'),
    margin: wp('3%'),
    borderBottomWidth: 0.6,
  },
  btn: {
    padding: wp('2%'),
    width: wp('30%'),
    borderRadius: 25,
    alignItems: 'center',
    marginTop: wp('3%'),
    margin: wp('3%'),
  },
  image: {
    width: wp('38%'),
    height: wp('38%'),
    borderRadius: wp('100%'),
    //   backgroundColor: 'gray',
  },
  camera: {
    borderRadius: wp('16%'),
    padding: wp('2%'),
    backgroundColor: 'white',
    marginLeft: wp('-10%'),
    alignSelf: 'center',
    marginBottom: wp('4%'),
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
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: hp('1%'),
    marginTop: wp('10%'),
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
  camIcon: {
    alignSelf: 'flex-end',
    marginTop: wp('-12%'),
    backgroundColor: '#fff',
    borderRadius: 25,
  },
});

export default profile;
