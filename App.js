import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Explore from './components/Explore'; 
import store from './store';
import {Provider} from 'react-redux';
const App = () => {
  const Stack = createNativeStackNavigator();
  return  (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
      <Stack.Screen name="explore" component={Explore}  options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
  }
 
export default App;