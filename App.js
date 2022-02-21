/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
} from 'react-native';
import Routes from './src/Routes/Routes';
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Routes />
    </Provider>
  );
};

export default App;
