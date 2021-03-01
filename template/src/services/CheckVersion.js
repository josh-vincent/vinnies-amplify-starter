import {getVersion, getManufacturer} from 'react-native-device-info';

export const GetLocalVersion = () => {
  //Get Version on device
  return getVersion();
};

export const GetMinWorkingVersion = () => {
  //Get Remote mwv
  //Api call lambda with min working update
  return '1.0';
};

export const NeedsUpdating = () => {
  const min = GetMinWorkingVersion();
  const current = GetLocalVersion();
  const minNumber = parseFloat(min);
  const currentNumber = parseFloat(current);

  console.log('min:', minNumber, ' current:', currentNumber);
  if (currentNumber >= minNumber) {
    console.log('Verion higher', currentNumber);
    return false;
  } else {
    console.log('version lower', currentNumber);
    return true;
  }
};
