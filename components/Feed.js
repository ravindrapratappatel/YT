import React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Feed({title, channel_name, no_of_views, published, thumbnail }) {
  return (
    <View style={styles.main_container}>
      <View style={styles.thumbnail}>
          <Image source={{uri: thumbnail }}  style={{width: '100%', height: 280, position: 'relative', flex: 1 }} />
      </View>
      <View style={styles.details}>
        <View style={styles.user}>
          <View style={styles.avtar}>
            <Text> MK</Text>
          </View>
        </View>
        <View style={styles.video_detail}>
        <View>
        <Text style={styles.title}>{title} </Text>
        </View>
        <View style={styles.extra_detail}>
          <Text>{channel_name}</Text>
          <Text>{no_of_views}</Text>
          <Text>{published}</Text>
        </View>
        
        </View>
        <View style={styles.more}>
          <Icon name="more-vert" size={28} color="black" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    width: '100%',
    height: 350,
  },
  thumbnail: {
    flex: 0.80,
    backgroundColor: '#ffffff',
  },
  details: {
    paddingLeft: 5,
    flex: 0.20,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    flex: 0.1,
  },
  avtar: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video_detail: {
    flex: 0.8,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 20
  },
  title: {
      fontWeight: 'bold',
      fontSize: 17
  },
  extra_detail: {
flexDirection: 'row',
justifyContent: 'space-between'
  },
  more: {
    flex: 0.1,
  },
});

export default Feed;
