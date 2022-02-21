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
      namesender: 'Sajmal',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      namesender: 'Sajmal',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      namesender: 'Sajmal',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      namesender: 'Sajmal',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      namesender: 'Sajmal',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      namesender: 'Sajmal',
      img: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);

  const [data, setdata] = useState([...messages]);
  const [name, setname] = useState('Sajmal');

  const filterFunction = (text) => {
    const newData = data.filter((item) => {
      if (
        item.namesender !== '' &&
        item.namesender !== null &&
        item.namesender !== undefined
      ) {
        const itemData = `${item.namesender.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }
    });
    setSearchText(text);
    setMessages(newData);
  };

  const renderItems = ({item}) => {
    return (
      <>
        <Pressable
          style={[styles.centerPressable]}
          onPress={({index}) => {
            navigation.navigate('ChatBox');
          }}>
          <Image style={styles.imageView} source={{uri: item.img}} />
            <View
              style={styles.col1}>
              <Text
                style={{
                  fontWeight: item.IsRead === true ? 'normal' : 'bold',
                  fontFamily: 'Andale Mono',
                  width: wp('50%'),
                }}
                numberOfLines={1}>
                {item.namesender}
              </Text>
              <Text style={{fontSize: wp('2.7%')}}>
                  Farook college
              </Text>
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
