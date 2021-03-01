import * as React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styles, {colors} from 'theme/Styles';
import LandingScreen from 'auth/LandingScreen';
import Login from 'auth/Login';
import Register from 'auth/Register';
import ForgotPassword from 'auth/ForgotPassword';
const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        gestureEnabled: true,
        /*headerStyle: {
            backgroundColor: colors.mediumGreen
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: colors.sunset,
          headerBackTitleVisible: false
          */
      }}
      headerMode="none">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={({navigation}) => ({
          title: 'Landing',
          headerTitle: () => null /*<AuthStackHeader />*/,
        })}
      />
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Register'}}
      />
      <Stack.Screen
        name="Confirm Account"
        component={Register}
        options={{title: 'Confirm'}}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;

const ExampleView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Example</Text>
    </View>
  );
};
