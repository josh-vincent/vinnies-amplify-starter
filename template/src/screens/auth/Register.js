import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles, {colors} from 'theme/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Auth} from '@aws-amplify/auth';
import {Checkbox} from 'react-native-paper';

function Register(props) {
  const {navigation} = props;
  const [username, onChangeUser] = React.useState();
  const [password, onChangePass] = React.useState();
  const [values, setValues] = useState('');
  const [errors, setErrors] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  const handleChange = (name, value) => {
    console.warn(name, value);
    console.warn(errors);
    setErrors((values) => ({
      ...values,
      [name]: null,
    }));

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleErrorChange = (name, value) => {
    console.warn(name, value);
    setErrors((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const signUp = async () => {
    const {firstname, surname, password, email, phone_number} = values;
    console.warn(values);
    if (!firstname && !surname && !password && !email && !phone_number) {
      console.warn('Please fill out remaining fields');
      return;
    }
    if (phone_number?.startsWith('0')) {
      //If phone starts with 0 replace with +61
      var areacodePhone = phone_number.replace(/^.{1}/g, '+61');
    }
    try {
      const user = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email: email,
          phone_number: areacodePhone || phone_number,
          given_name: firstname,
          family_name: surname,
          'custom:first_logon': 'true',
        },
      });

      if (!user.userConfirmed) {
        navigation.popToTop();
      }
    } catch (error) {
      if (error.message.includes('password')) {
        return handleErrorChange('password', error.message);
      }
      if (error.message.includes('User already exists')) {
        return handleErrorChange('username', error.message);
      }

      console.log('error signing up:', error);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <KeyboardAwareScrollView
          behavior="padding"
          contentContainerStyle={{flex: 1, marginBottom: 20}}>
          {/*<Image
            source={require('')}
            style={{
              margin: 100,
              height: 150,
              width: 150,
              borderRadius: 100,
              alignSelf: 'center',
            }}
          />
          */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>CREATE NEW ACCOUNT</Text>
          </View>
          <Text style={styles.smallText}>Login Details</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder={'EMAIL ADDRESS'}
              placeholderTextColor={colors.sand}
              autoCompleteType="email"
              style={errors.email ? styles.textInputError : styles.textInput}
              onChangeText={(value) => handleChange('username', value)}
              value={values.username}
            />
            <TextInput
              placeholder={'PASSWORD'}
              textContentType={'password'}
              passwordRules="8 Characters"
              autoCompleteType="password"
              secureTextEntry={true}
              placeholderTextColor={colors.sand}
              style={errors.password ? styles.textInputError : styles.textInput}
              onChangeText={(value) => handleChange('password', value)}
              value={values.password}
            />
          </View>
          <Text style={styles.smallText}>Personal Details</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder={'FIRST NAME'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('firstname', value)}
              value={values.firstname}
            />
            <TextInput
              placeholder={'LAST NAME'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('surname', value)}
              value={values.surname}
            />
            <TextInput
              placeholder={'PHONE NUMBER'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('phone_number', value)}
              value={values.phone_number}
            />
            <TextInput
              placeholder={'DATE OF BIRTH'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('birthday', value)}
              value={values.birthday}
            />
            <TextInput
              placeholder={'HOW DID YOU HEAR ABOUT?'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('heard_about', value)}
              value={values.heard_about}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  height: 60,
                  borderRadius: 30,
                }}>
                <Checkbox.Item
                  uncheckedColor="white"
                  value="first"
                  status={
                    values.accept_terms === true ? 'checked' : 'unchecked'
                  }
                  onPress={(value) =>
                    handleChange(
                      'accept_terms',
                      !values.accept_terms ? true : false,
                    )
                  }
                />
              </View>
              <View style={{flexWrap: 'wrap', padding: 15}}>
                <Text>I ACCEPT THE </Text>
                <TouchableOpacity
                  style={{}}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={{textDecorationLine: 'underline'}}>
                    TERMS & CONDITIONS
                  </Text>
                </TouchableOpacity>
                <Text>AND </Text>
                <TouchableOpacity
                  style={{}}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={{textDecorationLine: 'underline'}}>
                    PRIVACY POLICY
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.fullScreenPrimaryButton}
              onPress={() => signUp()}>
              <Text style={styles.buttonsCtaText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text>ALLREADY HAVE AN ACCOUNT? </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{textDecorationLine: 'underline'}}>
                  LOGIN HERE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}

export default Register;
