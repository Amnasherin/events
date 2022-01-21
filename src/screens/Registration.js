import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Pressable, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Registration = ({navigation, route}) => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [college, setCollege] = useState('');
    const [age, setage] = useState('')
    const [accommodation, setaccommodation] = useState(false);
    const [accommodationValue, setaccommodationValue] = useState(true);
    const [alertIcon, setalertIcon] = useState('');
    const [alertTitle, setalertTitle] = useState('');
    const [alertMessage, setalertMessage] = useState('');
    const [alertButtons, setalertButtons] = useState([
      {
        text: 'OK',
        onPress: () => {
          setalertVisible(false);
        },
      },
    ]);
      const [modalVisible, setModalVisible] = useState(false);

    const InitialValidation = () => {
        if (name === '') {
            setModalVisible(true);
            setalertIcon('alert-circle-outline');
            setalertTitle('Warning');
            setalertMessage('Please enter your name');
        } else if (mail === '') {
            setModalVisible(true);
            setalertIcon('alert-circle-outline');
            setalertTitle('Warning');
            setalertMessage('Please enter your email address');
        } else if (college === '') {
            setModalVisible(true);
            setalertIcon('alert-circle-outline');
            setalertTitle('Warning');
            setalertMessage('Please enter your college name');
        } else if (age === '') {
            setModalVisible(true);
            setalertIcon('alert-circle-outline');
            setalertTitle('Warning');
            setalertMessage('Please enter your age');
        } else {
            navigation.navigate('EventReport', {
                image: route.params.image,
                name: route.params.EventName,
                frmDate: route.params.frmDate,
                toDate: route.params.toDate,
                frmTime: route.params.frmTime,
                toTime: route.params.toTime,
                category: route.params.category,
                des: route.params.des,
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-left' size={wp('7%')} style={styles.arrow} onPress={() => {
                    navigation.navigate('EventReport', {
                        image: route.params.image,
                        name: route.params.EventName,
                        frmDate: route.params.frmDate,
                        toDate: route.params.toDate,
                        frmTime: route.params.frmTime,
                        toTime: route.params.toTime,
                        category: route.params.category,
                        des: route.params.des,
                      });
                }} />
                <Text style={styles.headerText}>Event Registration</Text>
            </View>
            <View style={styles.seperator} />
            <KeyboardAwareScrollView>
                <View style={styles.innerView}>
                    <Text style={{margin: wp('3%'), fontSize: wp('4%')}}><Text style={{color: 'red', paddingRight: wp('6%')}}>*</Text>
                        {route.params.des}
                    </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your name'
                        onChangeText={setName}
                        value={name}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your email address'
                        onChangeText={setMail}
                        value={mail}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your college name'
                        onChangeText={setCollege}
                        value={college}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your age'
                        onChangeText={setage}
                        value={age}
                    />
                    {accommodationValue === true ?
                    <CheckBox
                    title={'Accommodation'}
                    checked={accommodation}
                    size={20}
                    containerStyle={styles.checkBox}
                    checkedColor="#343ef1"
                    uncheckedColor="#9b9b9b"
                    onPress={() => {
                        setaccommodation(!accommodation);
                        console.log(accommodation)
                    }}
                    /> : null}
                    <View style={{flexDirection: 'row'}}>
                        <Pressable style={[styles.btn, {backgroundColor: '#1fd199'}]} onPress={() => {
                            InitialValidation();
                        }}>
                            <Text style={{color: '#fff'}}>
                                Submit
                            </Text>
                        </Pressable>
                        <Pressable style={[styles.btn, {backgroundColor: '#e61919'}]} onPress={() => {
                            setCollege('');
                            setMail('');
                            setage('');
                            setaccommodation(false);
                            setName('');
                            navigation.navigate('EventReport', {
                                image: route.params.image,
                                name: route.params.EventName,
                                frmDate: route.params.frmDate,
                                toDate: route.params.toDate,
                                frmTime: route.params.frmTime,
                                toTime: route.params.toTime,
                                category: route.params.category,
                                des: route.params.des,
                                screen: 'Registration'
                            });
                        }}>
                            <Text style={{color: '#fff'}}>
                                Close
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
                    <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
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
        paddingTop: wp('2%'),
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
    checkBox: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      alignSelf: 'flex-start',
      marginLeft: wp('3%'),
    },
    headerText: {
        fontSize: wp('5%'),
        color: '#189AB4',
    },
    seperator: {
      borderBottomColor: '#ECECEC',
      borderBottomWidth: 1,
      marginBottom: wp('3%')
    },
    text: {
        fontSize: wp('4.5%'),
        paddingLeft: wp('3%'),
        paddingTop: wp('3%')
    },
    innerView: {
        justifyContent: 'center',
    },
    input: {
      height: wp('12%'),
      margin: wp('3%'),
      borderBottomWidth: 0.6,
    },
    btn: {
        padding: wp('2%'),
        width: wp('30%'),
        borderRadius: 25,
        alignItems: 'center',
        marginTop: wp('3%'),
        margin: wp('3%'),
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

export default Registration;