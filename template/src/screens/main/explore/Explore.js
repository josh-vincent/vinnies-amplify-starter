import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styles from 'theme/Styles'

function Explore(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Leaderboards")}>
        <Text style={styles.buttonText}>Leaderboards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Courses")}>
        <Text style={styles.buttonText}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Players")}>
        <Text style={styles.buttonText}>Players</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Explore