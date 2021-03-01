import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styles from 'theme/Styles';

function Profile(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Edit')}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
