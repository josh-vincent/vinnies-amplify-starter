import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from '../screens/loading/Loading';

const Stack = createStackNavigator();

function LoadingStackNavigator() {
  const [version, setVersion] = useState(true);
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#000000',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{title: 'Loading'}}
      />
    </Stack.Navigator>
  );
}

export default LoadingStackNavigator;
