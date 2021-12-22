import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomTab from './BottomTab';
import Feed from './Feed';
import TopTab from './TopTab';
import {useSelector, useDispatch } from 'react-redux';
import {SetuserName, channeldetail, explore} from '../actions/index';
const category = ['Python', 'JavaScript', 'React', 'Comedy', 'Cinema', 'Song'];


function Explore({navigation}) {
  const mystate= useSelector((state)=>state.get_user_name);
  const dispatch= useDispatch();
 // console.log(mystate);
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const response = await fetch(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&videoCategoryId=28&key='+my_api_key
      );
      const {items} = await response.json();
      setdata(items);
      console.log(items);
      dispatch(explore(items));    //storing explore screen data in redux store
    } catch (error) {
      console.error(error);
    }
  };

  function views_converter(count) {
    if (count < 1000) {
      return count;
    } else if (count >= 1000 && count < 1000000) {
      count = Math.floor(count / 1000);
      return count + 'k';
    } else {
      count = Math.floor(count / 1000000);
      return count + 'M';
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TopTab username={mystate}
        onPress={()=> navigation.navigate('Search') } />
      </View>
      <View style={styles.feed}>
        <ScrollView>
          <ScrollView horizontal={true}>
            {category.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <View style={styles.category_style}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Feed
                  thumbnail={item.snippet.thumbnails.high.url}
                  title={(item.snippet.title).slice(0, 60)}
                  channel_name={item.snippet.channelTitle}
                  no_of_views={views_converter(item.statistics.viewCount)}
                  published={String(item.snippet.publishedAt).slice(0, 10)}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <BottomTab
          onPress1={() => navigation.navigate('explore')}
          onPress2={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 0.06,
    backgroundColor: '#ffffff',
  },
  feed: {
    flex: 0.9,
  },
  category_style: {
    margin: 5,
    borderRadius: 10,
    width: 100,
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 0.06,
    backgroundColor: '#ffffff',
  },
});

export default Explore;

