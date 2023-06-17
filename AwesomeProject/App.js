// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen'
// import LoginScreen from './Screens/LoginScreen'
// import PostsScreen from './Screens/PostsScreen'
import { useFonts } from 'expo-font';

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
    <View>
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
      {/* <PostsScreen/> */}
    </View>
  );
}
