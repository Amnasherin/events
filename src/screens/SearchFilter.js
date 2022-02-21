/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, Pressable, FlatList, ImageBackground} from 'react-native';
import {SearchBar} from 'react-native-elements';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchFilter = ({navigation, route}) => {
  const [searchText, setSearchText] = useState('');
  const [data, setdata] = useState();
  const [Array, setArray] = useState(route.params.data);

  const filterFunction = (text) => {
    const newData = Array.filter((item) => {
      if (
        item.EventName !== '' &&
        item.EventName !== null &&
        item.EventName !== undefined
      ) {
        const itemData = `${item.EventName.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }
    });
    setSearchText(text);
    setdata(newData);
  };

  const DateView = (props) => {
    const Date = props.date;
    const day = moment(Date, 'DD-MM-YYYY').format('DD');
    const year = moment(Date, 'DD-MM-YYYY').format('MMM');
    return (
      <View
        style={{padding: wp('1%'), alignItems: 'center', flexDirection: 'row'}}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            marginRight: wp('1%'),
            fontSize: wp('2.5'),
          }}>
          {day}
        </Text>
        <Text
          style={{
            color: '#000',
            fontWeight: '800',
            alignSelf: 'flex-start',
            fontSize: wp('2.5'),
          }}>
          {year}
        </Text>
      </View>
    );
  };
  const RenderItem = ({item, index}) => {
    return (
      <View style={{padding: wp('3%'), paddingBottom: wp('1%')}}>
        <Pressable
          onPress={() => {
            navigation.navigate('EventReport', {
              image: item.image,
              name: item.EventName,
              frmDate: item.frmDate,
              toDate: item.toDate,
              frmTime: item.frmTime,
              toTime: item.toTime,
              category: item.category,
              des: item.description,
              screen: 'UpcomingEvents',
            });
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <DateView date={item.frmDate} /> */}
            <ImageBackground
              style={{
                width: wp('60%'),
                height: wp('40%'),
                alignSelf: 'flex-end',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                paddingBottom: wp('3%'),
              }}
              imageStyle={{borderRadius: 20}}
              resizeMode="cover"
              source={{uri: item.image}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('5%'),
                  backgroundColor: '#fff',
                  padding: wp('1%'),
                  borderRadius: 6,
                  marginBottom: wp('2%'),
                  fontStyle: 'italic',
                  fontFamily: 'serif',
                  fontWeight: '900',
                }}>
                {item.EventName}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: wp('5%'),
                  backgroundColor: '#fff',
                  borderRadius: 6,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: wp('2%'),
                  maxWidth: wp('55%'),
                }}>
                <MaterialIcons name="place" size={wp('4%')} color={'#000'} />
                <Text
                  style={{
                    color: '#000',
                    fontSize: wp('2.5%'),
                    padding: wp('1%'),
                    marginRight: wp('4%'),
                  }}>
                  {item.venue}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: wp('5%'),
                  backgroundColor: '#fff',
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: wp('2%'),
                  maxWidth: wp('60%'),
                  marginVertical: wp('2%'),
                }}>
                <Icon name="clock" size={wp('4%')} color={'#000'} />
                <DateView date={item.frmDate} />
                <Text
                  style={{
                    color: '#000',
                    fontSize: wp('2.5%'),
                    padding: wp('1%'),
                  }}>
                  {'At '}
                  {item.frmTime}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </Pressable>
      </View>
    );
  };
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
        <SearchBar
            placeholder={'Search here....'}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.searchInputStyle}
            onChangeText={(text) => {
            setSearchText(text);
            filterFunction(text);
            if (text === '' || text.length === 0) {
                setdata([]);
            }
            }}
            value={searchText}
            onClear={() => {
            setSearchText('');
            setdata([]);
            }}
        />
      </View>
      <FlatList data={data} renderItem={RenderItem} showsVerticalScrollIndicator={false} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('1%'),
  },
  arrow: {
    // padding: wp('1%'),
    marginRight: wp('3%'),
    bottom: wp('4%'),
  },
  headerText: {
    fontSize: wp('4.5%'),
    color: '#000',
    fontWeight: 'bold',
  },
  containerStyle: {
      flex: 1,
    // height: hp('6%'),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    paddingBottom: hp('2%'),
    marginBottom: hp('2%'),
    // marginHorizontal: wp('2%'),
  },
  inputContainerStyle: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    height: hp('5%'),
  },
  searchInputStyle: {fontSize: wp('4%'), color: 'black'},
});

export default SearchFilter;
