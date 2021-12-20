import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function BottomTab({onPress1, onPress2}) {
    return (
        <View style={styles.tab}>
        <TouchableOpacity onPress={onPress2} >
          <Text> <Icon name="home" size={28} color="black" /> </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress1}>
          <Text> <Icon name="explore" size={28} color="black" /> </Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text> <Icon name="subscriptions" size={28} color="black" /> </Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text> <Icon name="video-library" size={28} color="black" /> </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    tab: {
        backgroundColor: '#ffffff',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
})
export default BottomTab;
