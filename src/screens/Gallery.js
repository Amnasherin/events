import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridImageView from 'react-native-grid-image-viewer';

  const Gallery = ({navigation}) => {
    useEffect(() => {
      console.log('gallery');
    }, []);
   const image = [
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   ];
   const RenderView = ({item, index}) => {
    return(
      <View>
        {/* <Image style={{height: wp('20%'), width: wp('20%')}} source={{uri: item}} /> */}
      <GridImageView data={dat} />
      </View>
    )
   }
   return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', margin: wp('3%')}}>
            <Icon name='arrow-left' size={wp('7%')} style={styles.arrow} onPress={() => {
                navigation.navigate('UpcomingEvents');
            }} />
            <Text style={styles.header}>GALLERY</Text>
          </View>
          <View style={styles.seperator} />
          <GridImageView data={image} />
        </View>
     );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: wp('5%'),
    color: '#189AB4',
  },
  seperator: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
  },
  arrow: {
      // padding: wp('1%'),
      marginRight: wp('3%'),
  },
})

export default Gallery;