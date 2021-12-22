import React, {useState} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feed from './Feed';

function Search({navigation}) {
  const [name, setname] = useState('');
  const [data, setdata] = useState([]);
  const [clicked, setclick] = useState(false);

  // function to get video by name
  function get_video_by_name(name) {
      console.log(name);
    axios
      .get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&+q='+name+'&key='+my_api_key)
      .then(response => {
        const {items} = response.data;
        setdata(items);
        console.log(items);
        setclick(true);
      });
  }

  return (
    <View style={styles.main_container}>
      <View style={styles.top_container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" size={25} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <View style={styles.input}>
            <TextInput
              placeholder="Search"
              backgroundColor="#ffffff"
              style={{width: '80%'}}
              value={name}
              onChangeText={val => {
                setname(val);
              }}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                get_video_by_name(name);
              }}>
              <Icon name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {clicked && (
        <View style={styles.video_container}>
          <ScrollView>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Feed
                  thumbnail={item.snippet.thumbnails.high.url}
                  title={(item.snippet.title).slice(0, 60)}
                  channel_name={item.snippet.channelTitle}
                  published={String(item.snippet.publishedAt).slice(0, 10)}
                />
              </View>
            );
          })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
  },
  top_container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'black',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    flex: 0.1,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.9,
  },
  input: {
    marginLeft: 7,
    marginTop: 5,
    marginBottom: 5,
    flex: 0.93,
  },
  button: {
    flex: 0.07,
    marginLeft: -40,
  },
  video_container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    margin: 5,
    width: '98%',
  }
});

export default Search;

