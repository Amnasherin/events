/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Camera,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RadioForm from 'react-native-simple-radio-button';

const PostEvents = ({navigation}) => {
  const [image, setImage] = useState('');
  const [Email, setEmail] = useState('');
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [showFromTime, setShowFromTime] = useState(false);
  const [showToTime, setShowToTime] = useState(false);
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [college, setCollege] = useState('');
  const [Contact, setContact] = useState('');
  const [fromTimeValue, setfromTimeValue] = useState('');
  const [fromdatevalue, setfromdatevalue] = useState('');
  const [toTimeValue, settoTimeValue] = useState('');
  const [todatevalue, settodatevalue] = useState('');
  const [payment, setPayment] = useState(0);
  const [type, setType] = useState(0);
  const [radioprops, setradioprops] = useState([
    {label: 'Payment', value: 1},
    {label: 'Free', value: 2},
  ]);
  const [radioprops2, setradioprops2] = useState([
    {label: 'Online', value: 1},
    {label: 'Offline', value: 2},
  ]);
  const [fromTimeHH, setfromTimeHH] = useState('00');
  const [fromTimeMM, setfromTimeMM] = useState('00');
  const [fromTimeType, sefromTimeType] = useState('00');
  const [toTimeHH, settoTimeHH] = useState('00');
  const [toTimeMM, settoTimeMM] = useState('00');
  const [toTimeType, settoTimeType] = useState('00');
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.8,
    }).then((img) => {
      setImage(img.path);
      console.log(image, 'img');
    });
  };

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
    }).then((img) => {
      setImage(img.path);
    });
  };
  const hideDatePicker = () => {
    console.log('selectedDate', 'date');
    setShowFrom(false);
  };
  const onChange = (event, time) => {
    setShowFromTime(false);
    setfromTimeValue(time);
    setfromTimeHH(moment(time).format('HH'));
    setfromTimeMM(moment(time).format('mm'));
    sefromTimeType(moment(time).format('A'));
    const selectFromTime = moment(time).format('HH:mm');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Icon
          name="close"
          size={wp('8%')}
          color="#000"
          style={{}}
          onPress={() => {
            navigation.navigate('UpcomingEvents');
          }}
        />
        <Text style={styles.header}>Post Events</Text>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{paddingBottom: wp('15%')}}>
        {image === '' ? (
          <View style={styles.eventView}>
            <Text style={styles.eventText}>Create Event</Text>
          </View>
        ) : (
          <Image source={{uri: image}} style={styles.eventImage} />
        )}
        <View style={styles.uploadView}>
          <Pressable
            onPress={() => {
              takePhotoFromGallery();
            }}>
            <Text style={styles.gallery}>Gallery</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              takePhoto();
            }}>
            <Text style={styles.gallery}>Camera</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <View style={styles.TypeViewStyle}>
            <RadioForm
              radio_props={radioprops}
              initial={''}
              formHorizontal
              labelHorizontal
              labelStyle={[styles.radioStyle]}
              buttonColor={'#000'}
              selectedButtonColor={'#343ef1'}
              animation={false}
              buttonSize={hp('1%')}
              numColumns={2}
              numRows={2}
              onPress={(value) => {
                setPayment(value);
              }}
            />
          </View>
          <View style={styles.TypeViewStyle}>
            <RadioForm
              radio_props={radioprops2}
              initial={''}
              formHorizontal
              labelHorizontal
              labelStyle={[styles.radioStyle]}
              buttonColor={'#000'}
              selectedButtonColor={'#343ef1'}
              animation={false}
              buttonSize={hp('1%')}
              numColumns={2}
              numRows={2}
              onPress={(value) => {
                setType(value);
              }}
            />
          </View>
          <Text style={styles.formText}>
            Event name
            <Text style={styles.starStyle}> *</Text>
          </Text>
          <TextInput
            value={eventName}
            onChangeText={setEventName}
            placeholder="Event name..."
            style={styles.inp}
          />
          <View
            style={styles.timeView}>
            <Pressable
              onPress={() => {
                setShowFromTime(true);
              }}>
              <Text style={styles.formText}>
                From Time
                <Text style={styles.starStyle}> *</Text>
              </Text>
            </Pressable>
            <Icon name="arrow-right" size={wp('7%')} />
            <Pressable
              onPress={() => {
                setShowToTime(true);
              }}>
              <Text style={styles.formText}>
                To Time
                <Text style={styles.starStyle}> *</Text>
              </Text>
            </Pressable>
          </View>
          <Text style={styles.formText}>
            Venue
            <Text style={styles.starStyle}> *</Text>
          </Text>
          <TextInput
            value={venue}
            onChangeText={setVenue}
            placeholder="Location..."
            style={styles.inp}
          />
          <Text style={styles.formText}>
            College name
            <Text style={styles.starStyle}> *</Text>
          </Text>
          <TextInput
            value={college}
            onChangeText={setCollege}
            placeholder="College name..."
            style={styles.inp}
          />
          <Text style={styles.formText}>
            Contact number
            <Text style={styles.starStyle}> *</Text>
          </Text>
          <TextInput
            value={Contact}
            onChangeText={setContact}
            placeholder="Contact number..."
            style={styles.inp}
          />
          <Text style={styles.formText}>
            Email ID
            <Text style={styles.starStyle}> *</Text>
          </Text>
          <TextInput
            value={Email}
            onChangeText={setEmail}
            placeholder="Email ID..."
            style={styles.inp}
          />
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Create Post</Text>
            <Icon
              name="check-circle"
              size={wp('6%')}
              style={styles.checkIcon}
              color={'#fff'}
            />
          </Pressable>
          {showFromTime ? (
            <DateTimePicker
              value={new Date()}
              mode={'time'}
              onChange={onChange}
              onCancel={hideDatePicker}
            />
          ) : null}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopColor: '#EDEDED',
    // borderTopWidth: 1,
    marginTop: wp('3%'),
    marginHorizontal: wp('-3%'),
    paddingHorizontal: wp('4%'),
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    paddingVertical: wp('1%'),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('1%'),
  },
  header: {
    fontSize: wp('5%'),
    color: '#000',
    fontWeight: 'bold',
    margin: wp('3%'),
  },
  eventView: {
    height: wp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  eventText: {
    color: '#000',
    fontSize: wp('6%'),
    fontFamily: 'serif',
    backgroundColor: '#fff',
    opacity: 0.4,
    padding: wp('3%'),
    borderRadius: 10,
    fontWeight: 'bold',
  },
  eventImage: {
    height: wp('80%'),
    width: wp('100%'),
  },
  uploadView: {
    flexDirection: 'row',
    paddingTop: wp('2%'),
    backgroundColor: '#000',
    paddingBottom: wp('2%'),
  },
  gallery: {
    color: '#fff',
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  inp: {
    height: wp('12%'),
    // marginTop: wp('2%'),
    // padding: wp('3%'),
    minWidth: wp('90%'),
    borderBottomColor: '#e5e3e8',
    borderBottomWidth: 1,
  },
  starStyle: {color: 'red', marginTop: hp('-0.2%'), fontSize: wp('4%')},
  form: {
    padding: wp('3%'),
  },
  formText: {
    paddingTop: wp('3%'),
    // paddingBottom: wp('1%'),
  },
  radioStyle: {
    marginRight: wp('3.6%'),
    fontSize: wp('4.5%'),
    fontWeight: '200',
  },
  TypeViewStyle: {
    //   paddingLeft: wp('4%'),
    justifyContent: 'center',
    paddingTop: wp('3%'),
    flexDirection: 'column',
    paddingBottom: hp('1%'),
    marginRight: wp('3%'),
  },
  btn: {
    padding: wp('3%'),
    backgroundColor: 'green',
    width: wp('35%'),
    margin: wp('3%'),
    borderRadius: 100,
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontSize: wp('4%'),
  },
  checkIcon: {
    marginHorizontal: wp('1.5%'),
  },
});

export default PostEvents;
