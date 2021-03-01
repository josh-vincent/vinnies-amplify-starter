import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from 'theme/Styles';

function ProfileSettings(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>

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
    <Text style={styles.settingsItem}>{item.key}</Text>
  </View>
);

export default ProfileSettings;
