import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';
import styles from 'theme/Styles'

function ExplorePlayers(props) {
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  const { navigation } = props

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{flex:1}}>
      <SearchBar
      onFocus={() => setSearching(true)}
      onCancel={() => setSearching(false)}
      onBlur={() => setSearching(false)}
      platform={"ios"}
          lightTheme
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
        {searching &&
        <View style={{height:'100%'}}><Text>Searching</Text></View>
        }
      <View style={styles.container}>
        <Text style={styles.text}>Explore Players</Text>
      </View>
    </View>
  )
}


export default ExplorePlayers