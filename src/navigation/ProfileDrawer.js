import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Button} from 'react-native';
import HomeNav from './HomeNav';
import ProfileStack from './ProfileStack';
import {useDispatch} from 'react-redux';
import {AUTH_LOGOUT} from '../redux/types';
import {primary_color} from '../screen/styles';

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  const dispatch = useDispatch();
  return (
    <Drawer.Navigator
      drawerContent={(route) => {
        return (
          <DrawerContentScrollView>
            <DrawerItemList {...route} />
            <Button
              title="Logout"
              onPress={() => dispatch({type: AUTH_LOGOUT})}
              color={primary_color}
            />
          </DrawerContentScrollView>
        );
      }}
      drawerPosition="right">
      <Drawer.Screen name="Home" component={HomeNav} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
