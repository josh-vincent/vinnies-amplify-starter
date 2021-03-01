import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from 'theme/Styles';

const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human',
};

function LandingScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.maincontainer}>
      <View style={{flex: 1}}>
        {
          //<Image source={require('')}  style={{margin: 100, height: 150, width: 150, borderRadius: 100}}/>
        }
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={styles.fullScreenDefaultButton}
          onPress={() => navigation.navigate('Login', {item: character})}>
          <Text style={styles.defaultButtonText}>SIGN IN WITH EMAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fullScreenPrimaryButton}
          onPress={() => navigation.navigate('Register', {item: character})}>
          <Text style={styles.primaryButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LandingScreen;
