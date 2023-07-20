import React, { useState, useEffect } from "react";
import {Image,  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions } from "react-native";


  import {useDispatch} from "react-redux";

import { useNavigation } from "@react-navigation/native";

import BackgroundImage from './img/PhotoBGpng.png'
import Avatar from './img/Rectangle.jpg'
import Add from './img/add.jpg'

// import {authSignUpUser} from "../redux/auth/authOperations";

const initialState = {
  nickname: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const dispatch = useDispatch();
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    // dispatch(authSignUpUser(state));
    // setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <View style={styles.container}>
        <View style={styles.keyboard}>
          <Image source={BackgroundImage} style={styles.backgroundImage}></Image>
          <View style={styles.registrationSection}>
            
            <Image source={Avatar} style={styles.avatar}/>
            <Image source={Add} style={styles.addAvatar}/>
          <Text style={styles.title}>Реєстрація</Text>
          <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Логін"
            onFocus={() => setIsShowKeyboard(true)}
            value={state.nickname}
            onChangeText={(value) =>
              setstate((prevState) => ({ ...prevState, nickname: value }))
            }
            textContentType="username"
            autoCompleteType="off"
          />
          
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Адреса електронної пошти"
            onFocus={() => setIsShowKeyboard(true)}
            value={state.email}
            onChangeText={(value) =>
              setstate((prevState) => ({ ...prevState, email: value }))
            }
            textContentType="username"
            autoCompleteType="off"
  
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Пароль"
            secureTextEntry={true}
            onFocus={() => setIsShowKeyboard(true)}
            value={state.password}
            onChangeText={(value) =>
              setstate((prevState) => ({ ...prevState, password: value }))
            }
            textContentType="username"
            autoCompleteType="off"
          />
      </KeyboardAvoidingView>
          <Text style={styles.showPassword}>Показати</Text>
          <TouchableOpacity
                onPress={handleSubmit}
              >
                <Text style={styles.button}>Зареєстуватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
              ></TouchableOpacity>

          <Text style={styles.signIn} onPress={() => navigation.navigate("Login")}>Вже є акаунт? Увійти</Text>
        </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

  const styles = StyleSheet.create({
    
    container: {
      fontFamily: 'Roboto-Regular',
      padding: 7,
      width: 390,
      justifyContent: "flex-end",

    },

    keyboard: {
      position: 'relative',
    },

    backgroundImage: {
      justifyContent: "center",
      alignItems: "center",
    },

    registrationSection: {
      position: 'absolute',
      top: 280,
      width: '100%',
      height: 700,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar:{
      position: 'absolute',
      backgroundColor: '#F6F6F6',
      width: 120,
      height: 120,
      left: '33%',
      top: -60,
      zIndex: 2,
      borderRadius: 16,
      borderColor: '#F6F6F6',
      borderWidth: 1,
    },
    addAvatar: {
      position: 'absolute',
      width: 25,
      height: 25,
      right: '33%',
      top: 20,
      zIndex: 3,
      borderRadius: 100,
    },


    title: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 500,
      color: "#212121",
      marginTop: 92,
      marginBottom: 33,
      fontSize: 30,
      textAlign: "center",
  },

    input: {
        height: 50,
        width: 343,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        padding: 14,
        fontSize: 16,
    },
    showPassword: {
      position: 'absolute',
      top: 317,
      right: 40,
      fontSize: 16,
    },

    button: {
      height: 50,
      width: 343,
      marginTop: 27,
      backgroundColor:'#FF6C00',
      borderRadius: 100,
      padding: 12,
      textAlign: "center",
    },

    signIn: {
      marginTop: 16,
      color: '#1B4371'

    }
    
});