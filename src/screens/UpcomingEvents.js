import React, {useState, useRef} from 'react';
import {View, Text, Pressable, Image, StyleSheet, FlatList, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';
import moment from 'moment';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
let Array = [];
const UpcomingEvents = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(0);
  const ref = useRef(null);
  const date1 = new Date();
  const day = moment(date1).format("dddd");
  const date = moment(date1).format("MMM D, YY");
  const category = [
    {
      name: 'All'
    },
    {
      name: 'Science'
    },
    {
      name: 'Arts'
    },
    {
      name: 'Sports'
    },
    {
      name: 'IT'
    },
    {
      name: 'Others'
    },

  ];
  const [data, setData] = useState([
    {
      EventName:'Atharva',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Science',
      description: 'All are welcome',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
    {
      EventName:'Fozlava 20',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'ConCIPT 2020',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Arts',
      image: 'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Sierra 19',
      frmDate: '31/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Fuzzle',
      frmDate: '31/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Others',
      image: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Online Onam 2020',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Desmos 20',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Science',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'SheHacks',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'code-a-pookkalam',
      frmDate: '03/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ]);
  Array = [
    {
      EventName:'Atharva',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Science',
      description: 'All are welcome',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
    {
      EventName:'Fozlava 20',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'ConCIPT 2020',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Arts',
      image: 'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Sierra 19',
      frmDate: '31/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Fuzzle',
      frmDate: '31/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Others',
      image: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Online Onam 2020',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'Desmos 20',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Science',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'SheHacks',
      frmDate: '01/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'IT',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      EventName: 'code-a-pookkalam',
      frmDate: '03/01/2021',
      toDate: '03/01/2021',
      frmTime: '10:00 am',
      toTime: '06:00 pm',
      venue: 'Auditorium',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.flatlistView,{
        backgroundColor: selectedItem === index ? '#D4F1F4' : 'white'}]}>
          <Pressable onPress={() => {
            setSelectedItem(index);
            ref.current.scrollToIndex({animated: true, index: index});
            LoadItems(item);
          }}>
        <Text>{item.name}</Text></Pressable>
      </View>
    )
  };

  const LoadItems = (items) => {
    let list = [];
    setData(...Array);
    const sub = [...Array];
    sub.map((item) => {
      if(items.name === 'Science') {
            if (item.category === 'Science') {
            list.push(item)
            return list;
          }
      } else if (items.name === 'Arts') {
        if (item.category === 'Arts') {
        list.push(item)
        return list;
      }
      } else if (items.name === 'Sports') {
        if (item.category === 'Sports') {
        list.push(item)
        return list;
      } 
      } else if (items.name === 'IT') {
        if (item.category === 'IT') {
        list.push(item)
        return list;
      } 
      } else if (items.name === 'Others') {
        if (item.category === 'Others') {
        list.push(item)
        return list;
      } 
      } else {
         list.push(item)
         return list;
      }
    })
    setData(list);
  }

  const DateView = (props) => {
    const Date = props.date;
    const day = moment(Date, 'DD-MM-YYYY').format("DD");
    const year = moment(Date, 'DD-MM-YYYY').format("YYYY");
    return (
      <View style={{padding: wp('2%')}}>
        <Text style={{color: '#000'}}>{day}</Text>
        <Text style={{color: '#000'}}>{year}</Text>
      </View>
    )
  } 

  const RenderView = ({item, index}) => {
    return (
      <View style={{padding: wp('3%'), paddingBottom: wp('1%')}}>
        <Pressable onPress={() => {
          navigation.navigate('EventReport', {
            image: item.image,
            name: item.EventName,
            frmDate: item.frmDate,
            toDate: item.toDate,
            frmTime: item.frmTime,
            toTime: item.toTime,
            category: item.category,
            des: item.description,
            screen: 'UpcomingEvents'
          })
        }}>
          <ImageBackground style={{width: wp('92%'), height: wp('55%'), alignSelf: 'center'}} imageStyle={{borderRadius: 20}} resizeMode='cover' source={{uri: item.image}}>
            <View style={{backgroundColor: '#fff', position: 'absolute', right: 3, top: 3, borderTopEndRadius: 20, borderBottomLeftRadius: 20}}>
              <DateView date={item.frmDate}  />
            </View>
          </ImageBackground>
          <Text style={{color: '#000', fontSize: wp('5%'), alignSelf: 'flex-start', marginHorizontal: wp('5%')}}>
            {item.EventName}
          </Text>
        </Pressable>
      </View>
    )
  }
    return (
          <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',
    margin: wp('3%')}}>
              <Text style={styles.header}>Upcoming Events</Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontFamily: 'sans', fontSize: wp('5%')}}>{date}</Text>
                <Text style={{fontFamily: 'sans', fontSize: wp('5%'), alignSelf: 'flex-end'}}>{day}</Text>
              </View>
            </View>
            <View style={styles.seperator} />
            <SearchBar
                  placeholder={'Search here....'}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.searchInputStyle}
                  onChangeText={(text) => {
                    setSearchText(text);
                  }}
                  value={searchText}
                  onClear={() => {
                    setSearchText('');
                  }}
                />
                <View style={{paddingBottom: wp('2%')}}>
                <FlatList ref={ref} showsHorizontalScrollIndicator={false} data={category} horizontal={true}  renderItem={renderItem}/></View>
                <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={RenderView} />

          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: wp('6.5%'),
    color: '#189AB4',
    fontWeight: 'bold',
  },
  seperator: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
  },
  searchInputStyle: {fontSize: wp('4%'), color: 'black'},
  containerStyle: {
    height: hp('8%'),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    marginBottom: hp('2%'),
  },
  inputContainerStyle: {
    backgroundColor: '#D7E2E9',
    borderRadius: wp('10%'),
    height: hp('6%'),
  },
  flatlistView: {
    elevation: 3,
    margin: wp('2%'),
    padding: wp('2%'),
    height: wp('9%'),
    borderRadius: 10,
    minWidth: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('3%')
  }
})
export default UpcomingEvents;