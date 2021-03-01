import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import styles from 'theme/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomIcon from './CustomIcon';

const RoundedBox4 = ({
  icon,
  iconFamily,
  iconSize,
  bottomText,
  topText,
  selected,
  handleChange,
  lines,
  children,
}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <TouchableOpacity
      onPress={handleChange}
      style={!selected ? [styles.buttonUnselected4] : [styles.buttonSelected4]}>
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={lines || 2}
          style={
            !selected
              ? [styles.largeTextGreen]
              : [styles.largeTextGreen, {color: 'white'}]
          }>
          {topText || 'number'}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={lines || 2}
          style={!selected ? [styles.smallTextGreen] : [styles.smallTextWhite]}>
          {bottomText || 'name'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundedBox4;
