import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import styles, {colors} from 'theme/Styles';

function AuthStackHeader(props) {
  const {width} = Dimensions.get('screen');
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      {
        //<Image source={require('')} style={{height: 30, width: 50}} />
      }
    </View>
  );
}

export default AuthStackHeader;
