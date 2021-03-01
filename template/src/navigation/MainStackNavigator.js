import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/main/Home';
import Detail from '../screens/main/Detail';
import Settings from '../screens/main/profile/Settings';

//Newsfeed Screens
import Newsfeed from '../screens/main/newsfeed/Newsfeed';

//Explore Screens
import Explore from '../screens/main/explore/Explore';
import ExplorePlayers from '../screens/main/explore/ExplorePlayers';

//New Round Screens
import NewRound from '../screens/main/newround/NewRound';
import NewRoundHelp from '../screens/main/newround/Help';
import RoundSettings from '../screens/main/newround/RoundSettings';

//Profile screens
import Profile from '../screens/main/profile/Profile';
import ProfileEdit from '../screens/main/profile/Edit';
import ProfileSettings from '../screens/main/profile/Settings';

//Chat Screens
import ChatsList from '../screens/main/chat/ChatsList';
import ChatNew from '../screens/main/chat/ChatNew';
import ChatScreen from '../screens/main/chat/ChatScreen';
import Notifications from '../screens/main/Notifications';

import {Image, Button, Text, View} from 'react-native';

// Contexts
import {UserContext} from 'context/UserState';
import ProfileStackHeader from '../screens/main/profile/ProfileStackHeader';
import styles, {colors} from '../theme/Styles';

//AWS
import {Auth} from '@aws-amplify/auth';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: '#101010',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#ffd700',
        headerBackTitleVisible: false,
      }}
      headerMode="none">
      <Stack.Screen
        name="Home"
        component={MainTabsNavigator}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({route}) => ({
          title: 'Notifications',
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.params.item.name,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings'}}
      />
    </Stack.Navigator>
  );
}

function MainTabsNavigator() {
  return (
    <BottomTabs.Navigator tabBarOptions={{showLabel: false}}>
      <BottomTabs.Screen
        name="Newsfeed"
        component={NewsfeedStackNavigatior}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Explore"
        component={ExploreStackNavigatior}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="NewRound"
        component={NewRoundStackNavigatior}
        options={{
          //tabBarButton: () => <ChatStackNavigatior />,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Chat"
        component={ChatStackNavigatior}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Profile"
        component={ProfileStackNavigatior}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const NewsfeedStack = createStackNavigator();

function NewsfeedStackNavigatior() {
  const {setUser} = useContext(UserContext);
  return (
    <NewsfeedStack.Navigator>
      <NewsfeedStack.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={({navigation}) => ({
          headerTitle: 'Newsfeed',
          headerLeft: () => (
            <Button
              title="SO"
              onPress={() =>
                Auth.signOut().then((result) => {
                  setUser(false);
                })
              }
            />
          ),
          headerRight: () => (
            <Button
              title="NF"
              onPress={() => navigation.navigate('Notifications')}
            />
          ),
        })}
      />
    </NewsfeedStack.Navigator>
  );
}

const ExploreStack = createStackNavigator();
function ExploreStackNavigatior() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={ExploreTabNavigatior} />
      <ExploreStack.Screen name="Leaderboards" component={Explore} />
      <ExploreStack.Screen name="Players" component={ExplorePlayers} />
    </ExploreStack.Navigator>
  );
}

const ExploreTabs = createMaterialTopTabNavigator();
export function ExploreTabNavigatior() {
  return (
    <ExploreTabs.Navigator>
      <ExploreTabs.Screen name="Courses" component={Explore} />
      <ExploreTabs.Screen name="Players" component={ExplorePlayers} />
    </ExploreTabs.Navigator>
  );
}

const NewRoundTabs = createMaterialTopTabNavigator();
export function NewRoundTabNavigatior() {
  return (
    <NewRoundTabs.Navigator>
      <NewRoundTabs.Screen name="Scorecard" component={RoundInProgress} />
      <NewRoundTabs.Screen
        name="Leaderboard"
        component={RoundInProgressLeaderboard}
      />
    </NewRoundTabs.Navigator>
  );
}
const NewRoundStack = createStackNavigator();
function NewRoundStackNavigatior() {
  return (
    <NewRoundStack.Navigator>
      <NewRoundStack.Screen name="NewRound" component={NewRound} />
      <NewRoundStack.Screen name="Help" component={NewRoundHelp} />
      <NewRoundStack.Screen
        name="RoundInProgress"
        component={NewRoundTabNavigatior}
        options={({navigation}) => ({
          headerStyle: {height: 200},
          headerRight: () => (
            <Button
              title="SS"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
          headerLeft: null,
          headerBackTitleVisible: false,
          headerTitle: () => <Text>Custom header</Text>,
          tabBarLabel: ({color, focused}) => (
            <Text style={{color: color}}>Home</Text>
          ),
        })}
      />
      <NewRoundStack.Screen name="RoundSettings" component={RoundSettings} />
    </NewRoundStack.Navigator>
  );
}

const ChatStack = createStackNavigator();
function ChatStackNavigatior() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="ChatsList" component={ChatsList} />
      <ChatStack.Screen name="NewChat" component={ChatNew} />
      <ChatStack.Screen name="Chat" component={ChatScreen} />
    </ChatStack.Navigator>
  );
}

const ProfileTabs = createMaterialTopTabNavigator();
export function ProfileTabNavigatior() {
  return (
    <ProfileTabs.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: 'red',
        style: {backgroundColor: colors.sand},
      }}>
      <ProfileTabs.Screen
        name="Leaderboards"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={24}
              style={focused ? [{flex: 1, color: 'white'}] : [{color: 'black'}]}
            />
          ),
        }}
      />

      <ProfileTabs.Screen
        name="Calendar"
        component={ProfileSettings}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              color={color}
              size={24}
              style={focused ? [{flex: 1, color: 'white'}] : [{color: 'black'}]}
            />
          ),
        }}
      />
    </ProfileTabs.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackNavigatior() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileTabNavigatior}
        options={({navigation}) => ({
          headerStyle: {height: 200},
          headerRight: () => (
            <Button
              title="SS"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
          headerTitle: () => <ProfileStackHeader />,
          tabBarLabel: ({color, focused}) => (
            <Text style={{color: color}}>Home</Text>
          ),
        })}
      />
      <ProfileStack.Screen name="Edit" component={ProfileEdit} />
      <ProfileStack.Screen name="Settings" component={ProfileSettings} />
    </ProfileStack.Navigator>
  );
}

export default MainStackNavigator;
