/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MenuProvider} from 'react-native-popup-menu';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const EventReport = ({navigation, route}) => {
  const [report, setReport] = useState(false);
  const [btnheader, setbtnheader] = useState('Show register members');
  const [screen, setscreen] = useState(route.params.screen);

  useEffect(() => {
    console.log(screen, 'screen');
  }, []);

  const [data, setData] = useState([
    {
      name: 'sajmal',
      status: 'Registered',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'sajmal',
      status: 'Registered',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'sajmal',
      status: 'Registered',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);

  const memberDetails = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row', marginRight: index <= 1 ? wp('-4%') : wp('0.1%')}}>
                <Image
                  style={{
                    width: wp('10%'),
                    height: wp('10%'),
                    borderRadius: 100,
                  }}
                  source={{uri: item.image}}
                />
              </View>
            );
          }}
        />
        <View 
                  style={{
                    width: wp('10%'),
                    height: wp('10%'),
                    borderRadius: 100,
                    backgroundColor: '#1d1059',
                    marginLeft: wp('-6%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.8
                  }}>
                    <Text style={{color: '#fff'}}>13+</Text>
                  </View>
      </View>
    );
  };

  const DateView = (item) => {
    console.log(item)
    const fromDate = moment(item.frmDate, 'MM/DD/YYYY').format('dddd, MMMM DD');
    const toDate = moment(item.toDate, 'MM/DD/YYYY').format('dddd, MMMM DD');
    return (
      <>
        <View style={styles.row}>
          <View style={styles.dateView}>
            <Icon name="calendar-month" size={wp('6%')} color={'#bfbec2'} />
            <Text style={styles.date}>{fromDate}</Text>
          </View>
          {item.toDate !== null && item.toDate !== undefined && item.toDate !== '' ? (
          <View style={styles.dateView}>
            <Icon name="arrow-right" size={wp('4%')} style={{alignSelf: 'center', paddingHorizontal: wp('2%')}} />
            <Icon name="calendar-month" size={wp('6%')} color={'#bfbec2'} />
            <Text style={styles.date}>{toDate}</Text>
          </View>
          ) : null}
        </View>
        <View style={styles.row}>
          <View style={styles.dateView}>
            <Icon name="clock" size={wp('6%')} color={'#bfbec2'} />
            <Text style={styles.date}>{item.frmTime}</Text>
          </View>
          {item.toTime !== null && item.toTime !== undefined && item.toTime !== '' ? (
          <View style={styles.dateView}>
            <Icon name="arrow-right" size={wp('4%')} style={{alignSelf: 'center', paddingHorizontal: wp('2%')}} />
            <Icon name="clock" size={wp('6%')} color={'#bfbec2'} />
            <Text style={styles.date}>{item.toTime}</Text>
          </View>
          ) : null}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          useNativeDriver
          style={{height: '100%'}}>
          <Icon
            name="arrow-left"
            size={wp('7%')}
            style={styles.arrow}
            onPress={() => {
              navigation.navigate('UpcomingEvents');
            }}
          />
          <Image
            style={{
              height: wp('70%'),
              width: wp('100%'),
              alignSelf: 'center',
            }}
            source={{uri: route.params.image}}
          />
          <ScrollView style={{top: wp('-6%'), backgroundColor: '#fff', borderRadius: 30}} contentContainerStyle={{ paddingBottom: wp('14%')}}>
          <View style={{padding: wp('5%')}}>
            <Text style={{fontSize: wp('5%'), color: '#000', fontWeight: 'bold'}}>
              {route.params.name}
            </Text>
              <Text style={{color: '#000', fontWeight: 'normal', paddingTop: wp('2%')}}>
                Online Event
              </Text>
              <Text style={{color: '#000', fontWeight: 'normal', paddingTop: wp('2%')}}>
                A Payment of 280{'\u20B9'} for particpation
              </Text>
            {DateView(route.params)}
            <View style={[styles.row, {paddingVertical: wp('5%'), justifyContent: 'space-between'}]}>
              <Text style={{alignSelf: 'center', color: '#000', fontWeight: 'normal'}}>
                16 joined
              </Text>
              {memberDetails()}
            </View>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: wp('3.5%')}}>
              Description
            </Text>
            <Text style={{color: '#afaeb0', fontWeight: 'bold', opacity: 0.7, fontSize: wp('3%'), paddingVertical: wp('2%')}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <View style={[styles.row, {paddingVertical: wp('3%')}]}>
              <Ionicons name="location" size={wp('6%')} color={'#bfbec2'} />
              <Text style={{color: '#000', fontWeight: 'bold', opacity: 0.7, fontSize: wp('3.5%'), paddingVertical: wp('1%'), paddingHorizontal: wp('3%')}}>
                {route.params.venue}
              </Text>
            </View>
            <Pressable style={styles.btn}>
              <Text style={{color: '#fff', fontSize: wp('5%')}}>
              Book The Event 🎊
              </Text>
            </Pressable>
          </View>
          </ScrollView>
        </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrow: {
    padding: wp('1%'),
    position: 'absolute',
    top: wp('2%'),
    zIndex: 10,
    backgroundColor: '#afaeb0',
    borderRadius: 100,
    left: wp('2%'),
    opacity: 0.7,
  },
  text: {
    fontSize: wp('4.5%'),
    paddingLeft: wp('3%'),
    paddingTop: wp('3%'),
  },

  commentList: {
    marginRight: wp('3%'),
    marginTop: wp('2%'),
  },
  listView: {paddingVertical: hp('1%'), width: '90%', marginTop: wp('3%')},
  dottedColumn: {
    flexDirection: 'column',
    width: 1,
    flex: 1,
    marginTop: wp('1%'),
    marginLeft: wp('-1%'),
    alignSelf: 'center',
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
    marginLeft: hp('1%'),
  },
  innerText: {
    fontSize: wp('3.5%'),
    color: '#189AB4',
  },
  btn: {
    padding: wp('2%'),
    backgroundColor: '#2aa4f5',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: wp('3%'),
    paddingVertical: wp('3%'),
  },
  dateView: {
    paddingTop: wp('5%'),
    flexDirection: 'row',
  },
  date: {
    fontSize: wp('3.3%'),
    color: 'gray',
    marginHorizontal: wp('2%'),
    paddingVertical: wp('0.5%')
  },
  row: {
    flexDirection: 'row',
  }
});

export default EventReport;
