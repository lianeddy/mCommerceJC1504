/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    axios
      .get('http://192.168.0.101:2000/product')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('here');
        console.log(err);
      });
  }, []);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
