import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from 'theme/Styles';

function Newsfeed(props) {
  const {navigation} = props;
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.newsfeedHorizontalListContainer}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={renderHorizontal}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.listcontainer}>
        {!loading ? (
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={renderPosts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key}
          />
        ) : (
          <>
            <View style={styles.newsfeedCard} />
            <View style={{padding: 5}} />
            <View style={styles.newsfeedCard} />
          </>
        )}
      </View>
    </View>
  );
}

const renderPosts = ({item, navigation}) => {
  return (
    <>
      <View style={styles.newsfeedCard}>
        <TouchableOpacity onPress={() => navigation.navigate('NewsfeedPlayer')}>
          <Text style={styles.newsfeedListItem}>{item.key}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newsfeedIcons}>
        <TouchableOpacity>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Share')}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newsfeedComments}>
        <Text>Comments</Text>
        <Text>Comments #1</Text>
        <Text>Comments #2</Text>
        <Text>Comments #3</Text>
      </View>
    </>
  );
};

const renderHorizontal = ({item}) => {
  return (
    <View style={styles.newsfeedHorizontalCard}>
      <Text style={styles.newsfeedHorizontalListItem}>{item.key}</Text>
    </View>
  );
};
export default Newsfeed;
