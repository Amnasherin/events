import  React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>EventZo</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 45,
    }
});

export default SplashScreen;