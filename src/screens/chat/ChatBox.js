/* eslint-disable prettier/prettier */
import React, {useState, useCallback} from 'react';
import {View, Text, Pressable, FlatList, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  GiftedChat,
  Bubble,
  Actions,
  ActionsProps,
} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';

const ChatBox = ({navigation, route}) => {
    const [messages, setMessages] = useState([{
        _id: 1,
        text: 'hi',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'ChatBot',
            avatar: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        image: 'https://images.pexels.com/photos/11125092/pexels-photo-11125092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }]);
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
  
    const renderActions = (props) => {
        return (
          <Actions
            {...props}
            options={{
              ['From Camera']: takePhoto,
              ['From Gallery']: takePhotoFromGallery,
            }}
            icon={() => (
              <Icon name={'camera'} size={wp('6.5%')} color={'#CFCFCF'} />
            )}
            onSend={(args) => console.log(args)}
          />
        );
      };
    const renderBubble = (props) => (
      <Bubble
        {...props}
        onLongPress={() => {
          console.log('on long press');
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
    const scrollToBottomComponent = () => {
      return (
        <View style={styles.bottomComponentContainer}>
          <Icon name="chevron-double-down" size={36} color="#6646ee" />
        </View>
      );
    };
    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages),
        );
    }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={wp('7%')}
          style={styles.arrow}
          onPress={() => {
            navigation.navigate(route.params.screen);
          }}
        />
        <Image style={styles.imageView} source={{uri: route.params.img}} />
        <View>
            <Text style={styles.headerText}>{route.params.name}</Text>
            <Text style={styles.headerText2}>
                Farook College
            </Text>
        </View>
      </View>
        <View style={{flex: 1}}>
              <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                placeholder="Type your message here..."
                renderUsernameOnMessage={false}
                inverted={true}
                renderActions={renderActions}
                renderBubble={renderBubble}
                scrollToBottomComponent={scrollToBottomComponent}
                renderAvatar={null}
                user={{_id: 1}}
              />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: wp('13%'),
    },
    header: {
      flexDirection: 'row',
      paddingVertical: wp('2%'),
      alignItems: 'center',
      paddingHorizontal: wp('1%'),
      borderBottomColor: '#EDEDED',
      borderBottomWidth: 1,
    },
    arrow: {
      padding: wp('1%'),
    //   marginRight: wp('3%'),
    },
    headerText: {
      fontSize: wp('3.5%'),
      color: '#000',
      fontWeight: 'bold',
    },
    imageView: {
      width: wp('8.2%'),
      height: wp('8.2%'),
      borderRadius: wp('8.2%'),
      backgroundColor: '#f2f2f2',
      marginRight: wp('2%'),
    },
    headerText2: {
        fontSize: wp('2.7%'),
    },
});

export default ChatBox;
