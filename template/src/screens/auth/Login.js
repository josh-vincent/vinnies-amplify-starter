import React, {useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles, {colors} from 'theme/Styles';
import {UserContext} from 'context/UserState';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Analytics, Auth} from 'aws-amplify';

function Login(props) {
  const user = useContext(UserContext);
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;
  const [values, setValues] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (name, value) => {
    setError(false);
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const signIn = async () => {
    const {username, password} = values;
    console.log(username, password);
    Analytics.record({
      name: 'login',
    });

    try {
      Auth.signIn(username, password)
        .then((result) => {
          if (result) {
            user.setUser(result);
          }
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });
    } catch (error) {
      console.log('error signing in', error);
    }
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
        <Text style={styles.screenTitle}>Sign In with Email</Text>
        <TextInput
          placeholder={'EMAIL ADDRESS'}
          placeholderTextColor={colors.sand}
          autoCompleteType="email"
          style={error ? styles.textInputError : styles.textInput}
          onChangeText={(value) => handleChange('username', value)}
          value={values.username}
          prea
        />
        <TextInput
          placeholder={'PASSWORD'}
          textContentType={'password'}
          passwordRules="8 Characters"
          autoCompleteType="password"
          secureTextEntry={true}
          placeholderTextColor={colors.sand}
          style={error ? styles.textInputError : styles.textInput}
          onChangeText={(value) => handleChange('password', value)}
          value={values.password}
        />
        <TouchableOpacity
          style={styles.fullScreenPrimaryButton}
          onPress={() => signIn()}>
          <Text style={styles.buttonsCtaText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text>FORGOT LOGIN? </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{textDecorationLine: 'underline'}}>RESET HERE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.fullScreenSecondaryButton}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonsCtaText}>CREATE NEW ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
