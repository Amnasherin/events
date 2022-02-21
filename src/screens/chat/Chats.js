/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {SearchBar} from 'react-native-elements';

const Chats = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [messages, setMessages] = useState([
    {
      MsgDate1: '12/19/2022',
      namereciever: 'sajmal',
      namesender: 'keeeka',
      ChatId: 2,
      ChatType: 'personal',
      cnt: 2,
      status: 'sender',
      IsRead: false,
      Message: 'hello',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      MsgDate1: '12/19/2022',
      namereciever: 'sajmal',
      namesender: 'keeeka',
      ChatId: 3,
      ChatType: 'personal',
      cnt: 0,
      status: 'sender',
      IsRead: true,
      Message: 'hello',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      MsgDate1: '12/19/2022',
      namereciever: 'sajmal',
      namesender: 'keeeka',
      ChatId: 4,
      ChatType: 'personal',
      cnt: 2,
      status: 'sender',
      IsRead: false,
      Message: 'hello',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      MsgDate: '12/19/2022',
      namereciever: 'keeeka',
      namesender: 'Sajmal',
      ChatId: 5,
      ChatType: 'personal',
      cnt: 0,
      status: 'sender',
      IsRead: true,
      Message: 'hello',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);

  const [data, setdata] = useState([...messages]);
  const [name, setname] = useState('Sajmal');

  const filterFunction = (text) => {
    const newData = data.filter((item) => {
      if (
        item.namereciever !== '' &&
        item.namereciever !== null &&
        item.namereciever !== undefined
      ) {
        const itemData = `${item.namereciever.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }
    });
    setSearchText(text);
    setMessages(newData);
  };

  const renderItems = ({item}) => {
    const today = new Date();
    const past = new Date(item.MsgDate1);
    const chatTime = moment(past).format('HH:mm a');
    function calcDate(date1, date2) {
      var diff = Math.floor(date1.getTime() - date2.getTime());
      var day = 1000 * 60 * 60 * 24;
      let days = Math.floor(diff / day);
      if (days < 1) {
        if (moment(date1).format('DD') === moment(date2).format('DD')) {
          return chatTime;
        } else {
          return 'Yesterday';
        }
      } else if (days === 1) {
        return 'Yesterday';
      } else if (days < 7) {
        return moment(past).format('dddd');
      } else {
        return moment(past).format('DD/MM/YYYY');
      }
    }
    const numOfDays = calcDate(today, past);

    return (
      <>
        <Pressable
          style={[styles.centerPressable]}
          onPress={({index}) => {
            navigation.navigate('ChatBox', {screen: 'Chats', name: item.namereciever, img: item.img});
          }}>
          <Image style={styles.imageView} source={{uri: item.img}} />
          <View
            style={styles.directionRow}>
            <View
              style={styles.col1}>
              <Text
                style={{
                  fontWeight: item.IsRead === true ? 'normal' : 'bold',
                  fontFamily: 'Andale Mono',
                  width: wp('50%'),
                }}
                numberOfLines={1}>
                {item.namereciever}
              </Text>
              {item.cnt === 1 ? (
                <Text
                  style={{
                    fontWeight: item.IsRead === true ? 'normal' : 'bold',
                    width: wp('50%'),
                  }}
                  numberOfLines={1}
                  >
                  {item.Message}
                </Text>
              ) : item.cnt > 1 ? (
                <Text
                  style={{
                    fontWeight: item.IsRead === true ? 'normal' : 'bold',
                    fontSize: wp('3%'),
                    width: wp('50%'),
                  }}
                  numberOfLines={1}>
                  {item.cnt} new messages
                </Text>
              ) : name === item.namesender && item.cnt === 0 ? (
                  <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    style={[
                      styles.iconStyle,
                      {
                        color: item.IsRead === false ? '#34B7F1' : '#a6a6a6',
                      },
                    ]}
                    name="checkmark-done"
                    size={15}
                  />
                <Text
                  style={{
                    fontWeight: item.IsRead === true ? 'normal' : 'bold',
                    width: wp('50%'),
                  }}
                  numberOfLines={1}
                  >
                  {item.Message}
                </Text>
                  </View>) : (
                <Text style={{fontWeight: 'normal', width: wp('35%')}}
                numberOfLines={1}
                >
                    {item.Message}
                </Text>
              )}
            </View>
            <View style={styles.col2}>
              <Text
                style={{
                  paddingVertical: wp('1%'),
                  fontSize: wp('2.5%'),
                  color: item.IsRead === true ? 'gray' : '#000',
                  fontWeight: item.IsRead ? 'normal' : 'bold'
                }}>
                {numOfDays}
              </Text>
              {item.cnt > 0 ? (
                <View
                  style={styles.colorView}
                />
              ) : null}
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onTouchMove={() => {
          //   ChatData();
        }}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <SearchBar
          placeholder={'Search here....'}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.searchInputStyle}
          onChangeText={(text) => {
            setSearchText(text);
            filterFunction(text);
          }}
          value={searchText}
          onClear={() => {
            setSearchText('');
          }}
        />
        <View style={styles.flatListView}>
          <FlatList
            style={styles.flatlist}
            data={messages}
            renderItem={renderItems}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListView: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  flatlist: {
    margin: 10,
  },
  col1: {
    flexDirection: 'column',
    paddingHorizontal: wp('3.5%'),
    paddingVertical: wp('1%'),
  },
  col2: {flexDirection: 'column', alignItems: 'flex-end'},
  colorView: {
    color: '#fff',
    backgroundColor: '#3ab3f0',
    fontSize: wp('2.3%'),
    borderRadius: 25,
    width: wp('2%'),
    height: wp('2%'),
    marginTop: wp('2%'),
  },
  centerPressable: {flexDirection: 'row', paddingVertical: wp('2%')},
  imageView: {
    width: wp('12.2%'),
    height: wp('12.2%'),
    borderRadius: wp('12.2%'),
    backgroundColor: '#f2f2f2',
  },
  rowRight: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  directionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
  },
  TextView: {
    width: wp('62%'),
    color: '#1a1a1a',
    marginLeft: wp('2.7%'),
    marginRight: wp('2%'),
    marginTop: wp('1.1%'),
    fontSize: wp('3.9%'),
    fontWeight: 'bold',
  },
  rowRightPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seperatorStyle: {
    marginLeft: wp('15%'),
    height: 0.6,
    width: wp('78%'),
    backgroundColor: '#EDEDED',
  },
  dateTime: {
    width: wp('16%'),
    textAlign: 'right',
    fontSize: wp('2.7%'),
    marginTop: wp('2%'),
  },
  messageText: {
    color: '#a6a6a6',
    fontSize: wp('3%'),
    paddingTop: wp('1%'),
    width: wp('70%'),
  },
  iconStyle: {
    color: '#a6a6a6',
    paddingTop: wp('1%'),
    marginLeft: wp('0.1%'),
    marginRight: wp('1%'),
  },
  countView: {
    backgroundColor: '#25D366',
    height: hp('2.5%'),
    borderRadius: wp('12%'),
    padding: wp('1%'),
    paddingLeft: wp('1.5%'),
    paddingRight: wp('1.5%'),
    justifyContent: 'center',
  },
  countStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('2.5%'),
  },
  containerStyle: {
    height: hp('6%'),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    paddingTop: hp('1.5%'),
    paddingBottom: hp('2%'),
    marginBottom: hp('2%'),
    marginHorizontal: wp('2%'),
  },
  inputContainerStyle: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputStyle: {fontSize: wp('4%'), color: 'black'},
});

export default Chats;
