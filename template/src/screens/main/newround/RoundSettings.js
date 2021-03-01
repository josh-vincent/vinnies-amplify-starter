import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styles from 'theme/Styles'

function RoundSettings(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Round Settings</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigation("RoundSettings")}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RoundSettings