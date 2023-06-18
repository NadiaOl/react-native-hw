import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, View, } from "react-native";
import BackgroundImage from './img/PhotoBGpng.png'


export default function LoginScreen() {

  return (

      <View style={styles.container}>
        <Image source={BackgroundImage} style={styles.backgroundImage}></Image>
        <View style={styles.registrationSection}>

          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Адреса електронної пошти"
            // value='value'
            textContentType="username"
            autoCompleteType="off"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Пароль"
            // value='value'
            textContentType="username"
            autoCompleteType="off"
          />
          <Text style={styles.showPassword}>Показати</Text>
          <Text style={styles.button}>Увійти</Text>
          <Text style={styles.signIn}>Немає акаунту?  Зареєструватися</Text>

        </View>
      </View>
  )
};

  const styles = StyleSheet.create({
    
    container: {
      position: 'relative',
      fontFamily: 'Roboto-Regular',
      
      flex: 1,
      padding: 10,
      width: 390,
      marginTop: 18,
    },

    backgroundImage: {

        justifyContent: "center",
        alignItems: "center",
    },

    registrationSection: {
      position: 'absolute',
      top: 280,
      left: 12,
      width: '100%',
      height: 700,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    title: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 500,
      color: "#212121",
      marginTop: 32,
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
        color: "#212121",
        padding: 14,
        fontSize: 16,
    },
    showPassword: {
      position: 'absolute',
      top: 193,
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
      fontSize: 16,
    },

    signIn: {

      marginTop: 16,
      color: '#1B4371',
      fontSize: 16,
    }
    
});