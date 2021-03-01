import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import styles from 'theme/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomIcon from './CustomIcon';

const RoundedBox = ({
  icon,
  iconFamily,
  iconSize,
  name,
  selected,
  handleChange,
  lines,
  text,
}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <TouchableOpacity
      onPress={handleChange}
      style={!selected ? [styles.buttonUnselected] : [styles.buttonSelected]}>
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        {text ? (
          <Text
            adjustsFontSizeToFit
            numberOfLines={lines || 2}
            style={
              !selected
                ? [styles.largeTextGreen]
                : [styles.largeTextGreen, {color: 'white'}]
            }>
            {text || 'name'}
          </Text>
        ) : (
          <CustomIcon name={icon} family={iconFamily} size={iconSize} />
        )}
        <Text
          adjustsFontSizeToFit
          numberOfLines={lines || 2}
          style={styles.smallTextWhite}>
          {name || 'name'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundedBox;
