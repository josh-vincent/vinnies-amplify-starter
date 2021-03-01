import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements';
import styles from 'theme/Styles'

function Chat(props) {
  const { navigation } = props
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  const [username, onChangeUser] = React.useState('Chat Name');
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{flex:1}}>
      <TextInput
       style={styles.textInput}
       onChangeText={text => onChangeUser(text)}
       value={username}
      />
      <SearchBar
        onFocus={() => setSearching(true)}
        onCancel={() => setSearching(false)}
        onBlur={() => setSearching(false)}
        platform={"ios"}
        lightTheme
        placeholder="Find Players..."
        onChangeText={updateSearch}
        value={search}
      />
        {searching &&
        <View style={{height:'90%',}}><Text>Searching</Text></View>
        }
    <View styles={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Chat