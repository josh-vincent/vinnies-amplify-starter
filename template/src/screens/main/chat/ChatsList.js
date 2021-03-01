import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styles from 'theme/Styles'

function ChatsList(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chats List</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("NewChat")}>
        <Text style={styles.buttonText}>New Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatsList