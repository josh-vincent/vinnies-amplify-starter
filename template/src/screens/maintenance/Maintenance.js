import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getVersion, getManufacturer } from 'react-native-device-info';
import styles from 'theme/Styles'

function Maintenance(props) {
  const { navigation } = props
  const [device, setDevice] = useState()

  useEffect(() => {
    getManufacturer()
      .then(manufacturer => setDevice(manufacturer))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maintenance Screen</Text>
      <Text style={styles.text}>{device}</Text>
      <TouchableOpacity onPress={()=>console.warn("go to appstore")}>
        <Text style={styles.text}>Go to Appstore</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Maintenance