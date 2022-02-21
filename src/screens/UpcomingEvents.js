/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SearchBar} from 'react-native-elements';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
let Array = [];
let cat = [];

const UpcomingEvents = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(0);
  const [catClicked, setcatclicked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const ref = useRef(null);
  const date1 = new Date();
  const day = moment(date1).format('D');
  const date = moment(date1).format('ddd');
  const category = [
    {
      name: 'All',
    },
    {
      name: 'Science',
    },
    {
      name: 'Arts',
    },
    {
      name: 'Sports',
    },
    {
      name: 'IT',
    },
    {
      name: 'Other',
    },
  ];
  const [data, setData] = useState([
    {
      EventName: 'Atharva',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Science',
      description: 'All are welcome',
      image:
        'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: true,
    },
    {
      EventName: 'Fozlava 20',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image:
        'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: false,
    },
    {
      EventName: 'ConCIPT 2020',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Arts',
      image:
        'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: false,
    },
    {
      EventName: 'Sierra 19',
      frmDate: '31/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Sports',
      image:
        'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: true,
    },
    {
      EventName: 'Fuzzle',
      frmDate: '31/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Other',
      image:
        'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: true,
    },
    {
      EventName: 'Online Onam 2020',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: false,
    },
    {
      EventName: 'Desmos 20',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Science',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: true,
    },
    {
      EventName: 'SheHacks',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: false,
    },
    {
      EventName: 'code-a-pookkalam',
      frmDate: '03/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Sports',
      image:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      payment: true,
    },
  ]);
  Array = [...data];
  const renderItem = ({item, index}) => {
    return (
      <>
        {item.name !== 'All' ? (
          <View
            style={[
              styles.flatlistView,
              {
                backgroundColor: selectedItem === index ? '#D4F1F4' : 'white',
              },,
            ]}>
            <Pressable
              onPress={() => {
                setSelectedItem(index);
                ref.current.scrollToIndex({animated: true, index: index});
                LoadItems(item);
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              {item.name === 'Science' ? (
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{
                    width: wp('10%'),
                    height: wp('10%'),
                    borderRadius: 100,
                    paddingHorizontal: wp('2%'),
                    marginRight: wp('1.2%'),
                  }}
                />
              ) : item.name === 'Sports' ? (
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/3846666/pexels-photo-3846666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{
                    width: wp('10%'),
                    height: wp('10%'),
                    borderRadius: 100,
                    paddingHorizontal: wp('2%'),
                    marginRight: wp('1.2%'),
                  }}
                />
              ) : item.name === 'IT' ? (
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={styles.categoryImage}
                />
              ) : item.name === 'Arts' ? (
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{
                    width: wp('10%'),
                    height: wp('10%'),
                    borderRadius: 100,
                    paddingHorizontal: wp('2%'),
                    marginRight: wp('1.2%'),
                  }}
                />
              ) : item.name === 'Other' ? (
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{
                    width: wp('10%'),
                    height: wp('10%'),
                    borderRadius: 100,
                    paddingHorizontal: wp('2%'),
                    marginRight: wp('1.2%'),
                  }}
                />
              ) : null}
              <Text>{item.name}</Text>
            </Pressable>
          </View>
        ) : null}
      </>
    );
  };

  const LoadItems = (items) => {
    let list = [];
    cat = [];
    setData(...Array);
    const sub = [...Array];
    sub.map((item) => {
      if (items.name === 'Science') {
        if (item.category === 'Science') {
          list.push(item);
          cat.push(item);
          console.log(cat, 'listtt');
          return list;
        }
      } else if (items.name === 'Arts') {
        if (item.category === 'Arts') {
          list.push(item);
          cat.push(item);
          return list;
        }
      } else if (items.name === 'Sports') {
        if (item.category === 'Sports') {
          list.push(item);
          cat.push(item);
          return list;
        }
      } else if (items.name === 'IT') {
        if (item.category === 'IT') {
          list.push(item);
          cat.push(item);
          return list;
        }
      } else if (items.name === 'Other') {
        if (item.category === 'Other') {
          list.push(item);
          cat.push(item);
          return list;
        }
      } else {
        list.push(item);
        cat.push(item);
        return list;
      }
    });
    setData(list);
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

  const RenderView = ({item, index}) => {
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
              venue: item.venue,
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

  const renderFree = ({item}) => {
    if (item.payment === false) {
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
                  width: wp('35%'),
                  height: wp('30%'),
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  paddingBottom: wp('3%'),
                }}
                imageStyle={{borderRadius: 20}}
                resizeMode="cover"
                source={{uri: item.image}}>
                {/* <Text
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
                </View> */}
              </ImageBackground>
            </View>
            <Text
              style={{
                color: '#000',
                fontSize: wp('3%'),
                marginHorizontal: wp('1.5%'),
                backgroundColor: '#fff',
                padding: wp('1%'),
                borderRadius: 6,
                marginBottom: wp('2%'),
                fontFamily: 'serif',
                fontWeight: '900',
              }}>
              {item.EventName}
            </Text>
          </Pressable>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginVertical: wp('4%'),
            marginLeft: wp('4%'),
            backgroundColor: '#1d1059',
            padding: wp('2%'),
            borderRadius: 6,
          }}>
          <Text style={{color: '#fff', fontSize: wp('2.5%')}}>{day}</Text>
          <Text style={{color: '#fff', fontSize: wp('2.5%')}}>{date}</Text>
        </View>
        <Text style={styles.header}>Upcoming Events</Text>
        <Icon
          name="magnify"
          size={wp('5%')}
          color="#fff"
          style={{
            backgroundColor: '#1d1059',
            borderRadius: 100,
            padding: wp('2.5%'),
            alignSelf: 'center',
            opacity: 0.6,
          }}
          onPress={() => {

          navigation.navigate('SearchFilter', {screen: 'UpcomingEvents', data: data});
          }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('Profile', {screen: 'UpcomingEvents'});
          }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={{
              height: wp('10%'),
              width: wp('10%'),
              borderRadius: 100,
              right: wp('3%'),
            }}
          />
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: wp('15%')}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
            }}
            tintColor={'#1d1059'}
            colors={['#1d1059']}
          />
        }>
        <View style={{paddingBottom: wp('2%')}}>
          <FlatList
            data={Array}
            showsVerticalScrollIndicator={false}
            renderItem={RenderView}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingHorizontal: wp('5%'),
              fontSize: wp('3.4%'),
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginTop: wp('4%'),
            }}>
            TOP FREE EVENTS
          </Text>
          <FlatList
            data={Array}
            showsVerticalScrollIndicator={false}
            renderItem={renderFree}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingHorizontal: wp('5%'),
              fontSize: wp('3.4%'),
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginTop: wp('4%'),
            }}>
            POPULAR CATEGORIES
          </Text>
          <FlatList
            ref={ref}
            showsHorizontalScrollIndicator={false}
            data={category}
            horizontal={true}
            renderItem={renderItem}
          />
          {catClicked === true ? (
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={renderFree}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          ) : null}
          <Text
            style={{
              paddingHorizontal: wp('4%'),
              fontSize: wp('3.4%'),
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginTop: wp('4%'),
              // marginBottom: wp('3%')
            }}>
            RECOMMENDED
          </Text>
          <FlatList
            data={Array}
            showsVerticalScrollIndicator={false}
            renderItem={renderFree}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingHorizontal: wp('4%'),
              fontSize: wp('3.4%'),
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginTop: wp('4%'),
              // marginBottom: wp('3%')
            }}>
            REGISTERED EVENTS
          </Text>
          <FlatList
            data={Array}
            showsVerticalScrollIndicator={false}
            renderItem={renderFree}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingHorizontal: wp('4%'),
              fontSize: wp('3.4%'),
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginTop: wp('4%'),
              // marginBottom: wp('3%')
            }}>
            PAST EVENTS
          </Text>
          <FlatList
            data={Array}
            showsVerticalScrollIndicator={false}
            renderItem={renderFree}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  categoryImage: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: 100,
    paddingHorizontal: wp('2%'),
    marginRight: wp('1.2%'),
  },
  header: {
    fontSize: wp('5%'),
    color: '#000',
    fontWeight: 'bold',
    margin: wp('3%'),
  },
  seperator: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
  },
  searchInputStyle: {fontSize: wp('4%'), color: 'black'},
  flatlistView: {
    elevation: 3,
    padding: wp('2%'),
    // height: wp('9%'),
    borderRadius: 10,
    minWidth: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('3%'),
    marginTop: wp('6%'),
    marginBottom: wp('3%'),
  },
});
export default UpcomingEvents;
