/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import UserProvider from 'context/UserState';
import AllNavigation from './src/navigation/AllNavigation';

import Amplify from 'aws-amplify';
import config from './aws-exports';

//Fonts
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

MaterialCommunityIcons.loadFont();
MaterialIconsIcon.loadFont();
FontAwesomeIcon.loadFont();
IoniconsIcon.loadFont();
Octicons.loadFont();

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  return (
    <>
      <UserProvider>
        <AllNavigation />
      </UserProvider>
    </>
  );
};

export default App;
