import 'react-native-gesture-handler';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./redux/store";

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import CommentsScreen from './Screens/CommentsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MapScreen from './Screens/MapScreen';
import Home from './Screens/Home';


const MainStack = createStackNavigator();
export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bolt': require('./Screens/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./Screens/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./Screens/assets/fonts/Roboto-Regular.ttf'),
  });



  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<Provider store={store}>
        <NavigationContainer> 
          <MainStack.Navigator initialRouteName="Registration"> 
            <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false, }}/>
            <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <MainStack.Screen name="Posts" component={PostsScreen} options={{ headerShown: false }}/>
            <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} options={{ headerShown: false }}/>
            <MainStack.Screen name="Comments" component={CommentsScreen} />
            <MainStack.Screen name="Profile" component={ProfileScreen} />
            <MainStack.Screen name="Map" component={MapScreen} />
            <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>          
          </MainStack.Navigator>
        </NavigationContainer>
</Provider>
    </TouchableWithoutFeedback>
  );
}


