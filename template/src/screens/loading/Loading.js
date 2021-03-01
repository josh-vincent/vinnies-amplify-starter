import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styles from 'theme/Styles';

function Loading(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading Screen</Text>
    </View>
  );
}

export default Loading;
