import React, {Fragment} from 'react';
// import Feather from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNav from './src/navigation/AppStack';

// Feather.loadFont();

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <AppStackNav />
      </NavigationContainer>
    </Fragment>
  );
}
