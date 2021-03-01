import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles, {colors} from 'theme/Styles';
import {UserContext} from 'context/UserState';

function ProfileStackHeader(props) {
  const {width} = Dimensions.get('screen');
  const {navigation} = props;
  const {user, setUser} = useContext(UserContext);
  if (user) {
    const {
      attributes: {given_name, family_name},
    } = user;
  }
  console.warn(user);
  return (
    <View style={styles.profileContainer}>
      <View style={{flex: 1, backgroundColor: colors.sand}}>
        <View style={styles.profileStackHeaderContainer}>
          <View>
            <Text>Heading in here </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProfileStackHeader;
