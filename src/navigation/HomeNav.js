import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {primary_color} from '../screen/styles';
import FeedScreen from '../screen/product/FeedScreen';
import ProductStack from './ProductStack';

const Tab = createBottomTabNavigator();

const Post = () => {
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};
const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

const HomeNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primary_color,
        inactiveTintColor: 'gray',
      }}
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'shopping-bag';
          } else if (route.name === 'Post') {
            iconName = 'ac-unit';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          }
          return <Icon name={iconName} type="material" color={color} />;
        },
      })}>
      <Tab.Screen name="Feed" component={ProductStack} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default HomeNav;
