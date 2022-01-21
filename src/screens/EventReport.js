import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image, FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dash from 'react-native-dash';
import { ScrollView } from 'react-native-gesture-handler';

const EventReport = ({navigation, route}) => {
    const [report, setReport] = useState(false);
    const [btnheader, setbtnheader] = useState('Show register members');
    const [screen, setscreen] = useState(route.params.screen);

    useEffect(() => {
        console.log(screen, 'screen')
    }, []);

    const [data, setData] = useState([
        {
            name: 'sajmal',
            status: 'Registered',
            image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'sajmal',
            status: 'Registered',
            image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'sajmal',
            status: 'Registered',
            image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'sajmal',
            status: 'Registered',
            image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'sajmal',
            status: 'Registered',
            image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'sajmal',
            status: 'Registered',
            image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
    ])

    const memberDetails = () => {
        return (
            <View>
                <FlatList data={data} renderItem={({item, index}) => {
                    return (
                        <View style={{flexDirection: 'row', padding: wp('3%')}}>
                            <Image style={{width: wp('12%'), height: wp('12%'), borderRadius: 100}} source={{uri: item.image}} />
                            <View style={{flexDirection: 'column', marginLeft: wp('3%'), justifyContent: 'center'}}>
                                <Text>
                                    {item.name}
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: wp('2%')}}>
                                        {item.status}
                                    </Text>
                                    <Icon name='checkbox-marked-circle' size={wp('5%')} color='#39c680' /> 
                                </View>
                            </View>
                        </View>
                    )
                }} />
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-left' size={wp('7%')} style={styles.arrow} onPress={() => {
                    navigation.navigate('UpcomingEvents');
                }} />
                <Text style={styles.headerText}>Event Details</Text>
            </View>
            <View style={styles.seperator} />
            <Image style={{height: wp('60%'), width: wp('97%'), alignSelf: 'center', borderRadius: 20}} source={{uri: route.params.image}} />
            <ScrollView>
                <View style={styles.directionRow}>
                    <View style={styles.commentList}>
                        <Icon
                            name="circle-outline"
                            size={wp('5%')}
                            color="#343ef1"
                            style={{alignSelf: 'center'}}
                        />
                        <Dash
                            style={styles.dottedColumn}
                            dashGap={5}
                            dashLength={4}
                            dashThickness={4}
                            dashColor={'#CCC'}
                            dashStyle={{borderRadius: 5}}
                        />
                    </View>
                    <View style={styles.listView}>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>Event name </Text>: {route.params.name}
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>Category</Text> : {route.params.category} 
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>From date </Text> : {route.params.frmDate}
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>To date</Text> : {route.params.toDate}
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>Start from </Text>: {route.params.frmTime}
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>End by</Text> : {route.params.toTime} 
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Text style={styles.innerText}>Description </Text>: {route.params.des}
                        </Text>
                        {screen === 'UpcomingEvents' || screen === 'Registration' ? (
                            
                        <View style={{flexDirection: 'row'}}>
                        <Pressable style={styles.btn} onPress={() => {
                            setReport(false);
                            navigation.navigate('Registration', {
                                image: route.params.image,
                                name: route.params.EventName,
                                frmDate: route.params.frmDate,
                                toDate: route.params.toDate,
                                frmTime: route.params.frmTime,
                                toTime: route.params.toTime,
                                category: route.params.category,
                                des: route.params.des,
                              });
                        }}>
                            <Text style={{color: '#fff'}}>
                                Register
                            </Text>
                        </Pressable>
                        <Pressable style={styles.btn2} onPress={() => {
                            setReport(!report);
                            if (report === true) {
                                setbtnheader('Show registered members');
                            } else {
                                setbtnheader('Hide register members');
                            }
                        }}>
                            <Text style={{color: '#fff'}}>
                                {btnheader}
                            </Text>
                        </Pressable>
                        </View>
                        ) : null}
                        </View>
                    </View>
                {report ? (memberDetails()) : (null)}
            </ScrollView>
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
    commentList: {
      marginRight: wp('3%'),
      marginTop: wp('2%')
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
        backgroundColor: '#1fd199',
        width: wp('30%'),
        borderRadius: 25,
        alignItems: 'center',
        marginTop: wp('3%'),
    },
    btn2: {
        padding: wp('2%'),
        backgroundColor: '#ac5353',
        borderRadius: 25,
        alignItems: 'center',
        marginTop: wp('3%'),
        marginLeft: wp('3%'),
        paddingHorizontal: wp('5%'),
    }
})

export default EventReport;