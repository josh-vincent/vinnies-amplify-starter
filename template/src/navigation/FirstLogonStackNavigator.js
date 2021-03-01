import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import ProfileSetup from '../screens/main/firstlogon/profileSetup';

const Stack = createStackNavigator();

function FirstLogonStackNavigator() {
  const [version, setVersion] = useState(true);
  return (
    <Stack.Navigator
      initialRouteName="First Logon"
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
      headerMode="none">
      <Stack.Screen
        name="First Logon"
        component={ExampleView}
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
}

export default FirstLogonStackNavigator;

const ExampleView = () => {
  return (
    <View>
      <Text>Example</Text>
    </View>
  );
};
