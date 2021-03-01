import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styles from 'theme/Styles'

function ProfileEdit(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go back to Profile Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileEdit