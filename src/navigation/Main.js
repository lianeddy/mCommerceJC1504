import React from 'react';
import {useSelector} from 'react-redux';
import HomeNav from './HomeNav';
import AuthStack from './AuthStack';

const Main = () => {
  const {isSignedIn} = useSelector((state) => state.auth);
  return <>{isSignedIn ? <HomeNav /> : <AuthStack />}</>;
};

export default Main;
