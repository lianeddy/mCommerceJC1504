import {Button, Input, Item} from 'native-base';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthModal} from '../../components';
import {registerAction} from '../../redux/action';
import {AUTH_FAILED} from '../../redux/types';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <View>
      <AuthModal />
      <Item>
        <Input placeholder="Username" onChangeText={(e) => setUsername(e)} />
      </Item>
      <Item>
        <Input placeholder="Email" onChangeText={(e) => setEmail(e)} />
      </Item>
      <Item>
        <Input placeholder="Password" onChangeText={(e) => setPassword(e)} />
      </Item>
      <Item>
        <Input
          placeholder="Confirm Password"
          onChangeText={(e) => setConfirm(e)}
        />
      </Item>
      <Button
        onPress={
          password === confirm
            ? () => dispatch(registerAction({username, email, password}))
            : () => dispatch({type: AUTH_FAILED, payload: 'Password Invalid'})
        }>
        <Text>Register</Text>
      </Button>
      <Button onPress={() => navigation.replace('Login')}>
        <Text>Login</Text>
      </Button>
    </View>
  );
};
// username sudah ada
// email sudah ada
// password harus sesuai

export default RegisterScreen;
