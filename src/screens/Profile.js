import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image, Modal} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

const Settings = ({navigation}) => {
const [alertIcon, setalertIcon] = useState('');
const [alertTitle, setalertTitle] = useState('');
const [alertMessage, setalertMessage] = useState('');
const [modalVisible, setModalVisible] = useState(false);
const [image, setImage] = useState('');
    
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.8,
    }).then((image) => {
        setImage(image)
    });
  };

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
    }).then((image) => {
        setImage(image);
    });
  };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-left' size={wp('7%')} style={styles.arrow} onPress={() => {
                    navigation.navigate('Settings');
                }} />
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.directionRow}>
                <Pressable onPress={() => {
                    setModalVisible(true)
                }} style={styles.camera}>
                <Image source={{uri: image=== '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&usqp=CAU' : image}} style={styles.image} />
                
                  <Icon
                    name="camera"
                    size={wp('5%')}
                    color='gray'
                  />
                </Pressable>
            </View>
            {modalVisible === true ? (
            <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Icon name={alertIcon} style={styles.modalText} color={'red'} size={wp('8%')} />
                    <Text style={[styles.modalText, {fontWeight: 'bold'}]}>{alertTitle}</Text>
                    <Text style={[styles.modalText, {paddingBottom: wp('2%')}]}>{alertMessage}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Gallery</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Gallery</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Gallery</Text>
                        </Pressable>
                    </View>
                </View>
                </View>
            </Modal>
            </View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: wp('2%')
    },
    header: {
        flexDirection: 'row',
        paddingBottom: wp('2%'),
        alignItems: 'center'
    },
    arrow: {
        padding: wp('1%'),
        marginRight: wp('3%'),
    },
    headerText: {
        fontSize: wp('5%'),
        color: '#189AB4',
    },
    seperator: {
      borderBottomColor: '#ECECEC',
      borderBottomWidth: 1,
      paddingTop: wp('1%')
    },
    text: {
        fontSize: wp('4.5%'),
        paddingLeft: wp('3%'),
        paddingTop: wp('3%')
    },
    image: {
      width: wp('35%'),
      height: wp('35%'),
      borderRadius: wp('100%'),
    //   backgroundColor: 'gray',
    },
    camera: {
      borderRadius: wp('16%'),
      padding: wp('2%'),
      backgroundColor: 'white',
      marginLeft: wp('-10%'),
      alignSelf: 'flex-end',
    },
    directionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      paddingBottom: hp('1%'),
      marginTop: wp('10%')
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      paddingTop: wp('5%'),
      paddingHorizontal: wp('5%'),
      paddingBottom: wp('3%'),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      minWidth: wp('67%')
    },
    textStyle: {
      color: "#000",
      fontWeight: 'normal',
      alignSelf: 'flex-end'
    },
    modalText: {
      textAlign: "center"
    }
})

export default Settings;