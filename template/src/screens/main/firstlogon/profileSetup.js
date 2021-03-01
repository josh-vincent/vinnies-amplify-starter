import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from 'context/UserState';
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
import {API, Auth, graphqlOperation} from 'aws-amplify';
//import * as mutationsCustom from 'graphqlcustom/mutations';
//import {calculateLastThreeRounds} from '../../../utilities/sharedFunctions';

function ProfileSetup(props) {
  const {navigation} = props;
  const {user, setUser, setFirstLogon, firstLogon} = useContext(UserContext);
  const [home_course, setHomeCourse] = React.useState();
  const [play, setPlay] = React.useState();
  const [values, setValues] = useState('');
  const [errors, setErrors] = useState('');
  const [handicap, setHandicap] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  const handleChange = (name, value) => {
    setErrors((values) => ({
      ...values,
      [name]: null,
    }));

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  useEffect(() => {
    var handicapCalc = 0; //calculateLastThreeRounds(values);
    setHandicap(handicapCalc);
  }, [values]);

  const handleErrorChange = (name, value) => {
    setErrors((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const completeProfile = async () => {
    let result = await Auth.updateUserAttributes(user, {
      'custom:first_logon': 'false',
    });
    console.log('Creating Profile', user.attributes, result);
    setUser(user, {attributes: result});
  };

  const newPlayerProfile = () => {};
  /*const newPlayerProfile = async () => {
    const {username, family_name, given_name, picture} = user;
    const course = {id: 123};
    try {
      const playerProfile = await API.graphql(
        graphqlOperation(mutationsCustom.createPlayerProfile, {
          input: {
            id: username,
            userId: username,
            firstname: given_name,
            lastname: family_name,
            picture: picture || null,
            playerProfileClubId: course?.id || null,
          },
        }),
      );

      const handicapResult = await API.graphql(
        graphqlOperation(mutationsCustom.createHandicap, {
          input: {
            userId: username,
            handicap: handicap,
          },
        }),
      );
      console.log('hanicap result', handicapResult);
      console.log('newPlayerProfile', playerProfile);
      await completeProfile();
      return playerProfile;
    } catch (err) {
      console.log('newPlayerProfile err', JSON.stringify(err));
    }
  };

      */

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <KeyboardAwareScrollView
          behavior="padding"
          contentContainerStyle={{flex: 1, marginBottom: 20}}>
          <Image
            source={require('')}
            style={{
              margin: 100,
              height: 150,
              width: 150,
              borderRadius: 100,
              alignSelf: 'center',
            }}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>CREATE PROFILE</Text>
          </View>
          <Text style={styles.smallText}>Personal Details</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder={'HOW OFTEN DO YOU PLAY?'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => setPlay(value)}
              value={values.play}
            />
            <Text style={styles.smallText}>Last 3 rounds</Text>
            <TextInput
              placeholder={'ROUND 1'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('round_1', value)}
              value={values.round_1}
            />
            <TextInput
              placeholder={'ROUND 2'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('round_2', value)}
              value={values.round_2}
            />
            <TextInput
              placeholder={'ROUND 3'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => handleChange('round_3', value)}
              value={values.round_3}
            />
            <Text>Current Handicap: {handicap}</Text>
            <TextInput
              placeholder={'WHERE IS YOUR HOME COURSE?'}
              placeholderTextColor={colors.sand}
              style={styles.textInput}
              onChangeText={(value) => setHomeCourse(value)}
              value={values.home_course}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <TouchableOpacity
              style={styles.fullScreenPrimaryButton}
              onPress={() => newPlayerProfile()}>
              <Text style={styles.buttonsCtaText}>CREATE PROFILE</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}

export default ProfileSetup;
