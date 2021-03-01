import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles, {colors} from 'theme/Styles';
import {Auth} from '@aws-amplify/auth';

function ForgotPassword(props) {
  const {navigation} = props;
  const {width, height} = Dimensions.get('screen');
  const [username, onChangeUser] = React.useState();
  const [password, onChangePass] = React.useState();
  const [code, onChangeCode] = React.useState();

  const forgotPassword = () => {
    Auth.forgotPassword(username)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const resetPass = () => {
    // Collect confirmation code and new password , then
    Auth.forgotPasswordSubmit(username, code, password)
      .then((data) => console.log(data))
      .catch((err) => console.log(JSON.stringify(err)));
  };

  return (
    <View style={styles.maincontainer}>
      <View style={{flex: 1}}>
        {
          //<Image source={require('')} style={{margin: 100, height: 150, width: 150, borderRadius: 100}}/>
        }
      </View>

      <View
        style={{
          flex: 2,
          width: width,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 40,
        }}>
        <Text style={styles.text}>RESET LOGIN</Text>
        <TextInput
          placeholder={'EMAIL ADDRESS'}
          placeholderTextColor={colors.sand}
          style={styles.textInput}
          onChangeText={(text) => onChangeUser(text)}
          value={username}
        />
        <TextInput
          placeholder={'CODE'}
          placeholderTextColor={colors.sand}
          style={styles.textInput}
          onChangeText={(text) => onChangeCode(text)}
          value={code}
        />
        <TextInput
          placeholder={'PASSWORD'}
          textContentType={'password'}
          passwordRules="8 Characters"
          autoCompleteType="password"
          secureTextEntry={true}
          placeholderTextColor={colors.sand}
          style={password?.error ? styles.textInputError : styles.textInput}
          onChangeText={(value) => onChangePass(value)}
          value={password}
        />
        <TouchableOpacity
          style={styles.fullScreenSecondaryButton}
          onPress={() => forgotPassword()}>
          <Text style={styles.buttonsCtaText}>SEND CODE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fullScreenPrimaryButton}
          onPress={() => resetPass()}>
          <Text style={styles.buttonsCtaText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgotPassword;
