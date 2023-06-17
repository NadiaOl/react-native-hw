import React from "react";
import {Image, ImageBackground, StyleSheet, Text, TextInput, View, } from "react-native";
import BackgroundImage from './img/PhotoBG.jpg'
import Avatar from './img/Rectangle.jpg'
import Add from './img/add.jpg'
// import Image from './img/Addphoto.jpg'

export default function RegistrationScreen() {

  return (

      <View style={styles.container}>
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}/>
        <View style={styles.registrationSection}>
          <Image source={Avatar} style={styles.avatar}/>
          <Image source={Add} style={styles.addAvatar}/>

          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Логін"
            // value='Логін'
            textContentType="username"
            autoCompleteType="off"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Адреса електронної пошти"
            // value='Адреса електронної пошти'
            textContentType="username"
            autoCompleteType="off"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Пароль"
            // value='Пароль'
            textContentType="username"
            autoCompleteType="off"
          />
          <Text style={styles.button}>Зареєстуватися</Text>
          <Text style={styles.signIn}>Вже є акаунт? Увійти</Text>
        </View>
      </View>
  )
};

  const styles = StyleSheet.create({
    
    container: {
      position: 'relative',
      fontFamily: 'Roboto-Regular',
      flex: 1,
      padding: 6,
      width: 390,
    },

    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    registrationSection: {
      position: 'absolute',
      top: 280,
      left: 6,
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar:{
      position: 'absolute',
      backgroundColor: 'red',
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
        color: "#212121",
        padding: 14,
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