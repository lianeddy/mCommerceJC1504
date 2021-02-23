import {Button, Input, Item, Text} from 'native-base';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {background_color, primary_color, surface_color, text_color} from '..';
import {AuthModal} from '../../components';
import {loginAction} from '../../redux/action';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <AuthModal />
      <View style={styles.logoContainer}>
        <Icon name="polymer" type="material" color={primary_color} size={150} />
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Item style={styles.itemStyle}>
            <Input
              placeholder="Username"
              onChangeText={(e) => setUsername(e)}
              style={styles.inputStyle}
              placeholderTextColor="gray"
            />
          </Item>
          <Item style={styles.itemStyle}>
            <Input
              placeholder="Password"
              onChangeText={(e) => setPassword(e)}
              secureTextEntry
              style={styles.inputStyle}
              placeholderTextColor="gray"
            />
          </Item>
        </View>
        {/* <Item> */}
        <View>
          <Button
            full
            onPress={() => dispatch(loginAction({username, password}))}
            style={styles.buttonStyle}>
            <Text>Login</Text>
          </Button>
          {/* </Item> */}
          {/* <Item> */}
          <Button
            full
            onPress={() => navigation.replace('Register')}
            style={styles.buttonStyle}>
            <Text>Register</Text>
          </Button>
          {/* </Item> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: background_color,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: primary_color,
    borderRadius: 20,
    marginVertical: 5,
  },
  inputStyle: {
    backgroundColor: surface_color,
    color: text_color,
    marginVertical: 5,
    borderColor: 'transparent',
  },
  itemStyle: {
    borderColor: 'transparent',
  },
});

export default LoginScreen;
