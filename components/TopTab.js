import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TopTab({navigation, username, onPress}) {
  return (
    <View style={styles.toptab}>
      <View>
        <Text>
          <Icon name="youtube" size={20} color="red" /> YouTube
        </Text>
      </View>
      <View style={styles.right}>
        <View>
        <TouchableOpacity onPress={onPress}>
          <Icon name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.avtar}>
          <Text>{username}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toptab: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 0.7,
  },
  right: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avtar: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopTab;
