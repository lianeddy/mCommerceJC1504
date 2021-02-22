import {Button, Input, Item, Text} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthModal} from '../../components';
import {loginAction} from '../../redux/action';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <AuthModal />
      <View>
        <Item>
          <Input placeholder="Username" onChangeText={(e) => setUsername(e)} />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
          />
        </Item>
        <Item>
          <Button onPress={() => dispatch(loginAction({username, password}))}>
            <Text>Login</Text>
          </Button>
        </Item>
        <Item>
          <Button onPress={() => navigation.replace('Register')}>
            <Text>Register</Text>
          </Button>
        </Item>
      </View>
    </View>
  );
};

export default LoginScreen;
