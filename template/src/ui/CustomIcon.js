import React from 'react';
import {Icon} from 'react-native-elements';
import propTypes from 'prop-types';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const defaultSize = 30;

const CustomIcon = ({name, color, size, style, family}) => {
  return (
    <>
      {family === 'FontAwesome' && (
        <FontAwesome
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {family === 'Ionicons' && (
        <Ionicons
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {family === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {family === 'MaterialIcons' && (
        <MaterialIcons
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {family === 'FontAwesome5Pro' && (
        <FontAwesome5Pro
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {family === 'AntDesign' && (
        <AntDesign
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {family === 'Octicons' && (
        <Octicons
          name={name || 'error'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
      {!family && (
        <MaterialCommunityIcons
          name={name || 'alert-circle'}
          color={color || '#fff'}
          size={size || defaultSize}
          containerStyle={style}
        />
      )}
    </>
  );
};

CustomIcon.propTypes = {
  name: propTypes.string,
  color: propTypes.string,
  size: propTypes.number,
};
export default CustomIcon;
