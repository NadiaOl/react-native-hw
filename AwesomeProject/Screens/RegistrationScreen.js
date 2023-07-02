import React, { useState } from "react";
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, } from "react-native";

import { useNavigation } from "@react-navigation/native";

import BackgroundImage from './img/PhotoBGpng.png'
import Avatar from './img/Rectangle.jpg'
import Add from './img/add.jpg'


export default function RegistrationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onLogin = () => {
    console.log(`${name} + ${password} + ${email}`);
  };

  return (

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
            value={name}
            textContentType="username"
            autoCompleteType="off"
            onChangeText={setName}
          />
          
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Адреса електронної пошти"
            value={email}
            textContentType="username"
            autoCompleteType="off"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Пароль"
            value={password}
            textContentType="username"
            autoCompleteType="off"
            onChangeText={setPassword}
          />
     </KeyboardAvoidingView>
          <Text style={styles.showPassword}>Показати</Text>
          <Text style={styles.button} onPress={() => 
            navigation.navigate("Login", { regEmail: {email} })}
            >Зареєстуватися</Text>

          <Text style={styles.signIn} onPress={() => navigation.navigate("Login")}>Вже є акаунт? Увійти</Text>
        </View>
        </View>
      </View>
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