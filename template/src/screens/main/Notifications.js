import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../theme/Styles';

function Notifications(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notificaitons</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
      <View style={styles.listcontainer}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
          ]}
          renderItem={renderNotifications}
        />
      </View>
    </View>
  );
}
const renderNotifications = ({item}) => (
  <View style={{borderTopWidth: 1, borderColor: 'black'}}>
    <Text style={styles.notificationItem}>{item.key}</Text>
  </View>
);

export default Notifications;
