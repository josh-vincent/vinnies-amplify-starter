import React, {useState, useContext, useEffect, useRef} from 'react';
import {UserContext} from 'context/UserState';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import LoadingStackNavigator from './LoadingStackNavigator';
import FirstLogonStackNavigator from './FirstLogonStackNavigator';
import Maintenance from '../screens/maintenance/Maintenance';
import {getVersion, getManufacturer} from 'react-native-device-info';
import {AppState} from 'react-native';
import {NeedsUpdating} from 'services/CheckVersion';
import {Auth} from '@aws-amplify/auth';

function AllNavigation() {
  const appState = useRef(AppState.currentState);
  const {user, setUser} = useContext(UserContext);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [applicationState, setApplicationState] = useState('Loading');
  const [needsUpdating, setNeedsUpdating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuth] = useState(false);
  const [firstLogon, setFirstLogon] = useState();

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      //startingUp();
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
    if (appState.current === 'active') {
      startingUp();
    }
  };

  const startingUp = () => {
    setTimeout(() => {
      checkCorrectVersion();
      checkUserAuth();
    }, 2000);
  };

  const checkCorrectVersion = () => {
    console.log('1. Checking if correct version');
    const update = NeedsUpdating();
    console.log('Update:', update);
    if (update) {
      setNeedsUpdating(true);
    }
  };

  const checkUserAuth = () => {
    console.log('2. Checking user auth');
    Auth.currentAuthenticatedUser()
      .then((result) => {
        const {attributes} = result;
        console.log('2. Success', attributes);
        setUser(result);
        getPlayer(result.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPlayer = (username) => {
    console.log('2a. Getting Player Profile', username);
    /*queryPlayerID(user?.username)
      .then((result) => {
        setPlayer(result);
        console.log('setplayer', result);
      })
      .catch((err) => {
        console.log(err);
      });
      */
  };

  useEffect(() => {
    if (user) {
      const {attributes} = user;
      console.log('Authenticating', attributes);
      if (
        attributes['custom:first_logon'] === 'true' ||
        !attributes['custom:first_logon']
      ) {
        setFirstLogon(true);
      } else {
        setFirstLogon(false);
      }
      setAuth(true);
    } else {
      //To Test Auth page set auth to true
      setAuth(false);
      //setAuth(true);
    }
  }, [user]);

  useEffect(() => {
    //First check if loading
    if (loading) {
      return setApplicationState('Loading');
    }
    //Then check if version is up too date
    //To test set needsUpdating to true
    //const needsUpdating = true
    if (needsUpdating) {
      return setApplicationState('Maintenance');
    }
    //Determine if user is logged in or not
    if (authenticated) {
      if (firstLogon) {
        console.log('firstLogon', firstLogon);
        return setApplicationState('FirstLogon');
      } else {
        return setApplicationState('Authenticated');
      }
    } else {
      return setApplicationState('NotAuthenticated');
    }
  }, [loading, needsUpdating, authenticated, firstLogon]);

  return (
    <NavigationContainer>
      {(() => {
        switch (applicationState) {
          case 'Loading':
            return <LoadingStackNavigator />;
          case 'Maintenance':
            return <Maintenance />;
          case 'FirstLogon':
            return <FirstLogonStackNavigator />;
          case 'Authenticated':
            return <MainStackNavigator />;
          case 'NotAuthenticated':
            return <AuthStackNavigator />;
          default:
            null;
        }
      })()}
      {/*!user ? <AuthStackNavigator/> : <MainStackNavigator />*/}
    </NavigationContainer>
  );
}
export default AllNavigation;
