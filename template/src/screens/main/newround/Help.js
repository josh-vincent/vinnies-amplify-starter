import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styles from 'theme/Styles';

function RoundInProgress(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Help Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RoundInProgress;
