import React from "react";
import {Image, ImageBackground, ImageBackgroundComponent, StyleSheet, Text, TextInput, View, } from "react-native";
import BackgroundImage from './img/PhotoBGpng.png'
import Avatar from './img/Rectangle.jpg'
import Add from './img/add.jpg'
// import Image from './img/Addphoto.jpg'

export default function RegistrationScreen() {

  return (

      <View style={styles.container}>
          <Image source={BackgroundImage} style={styles.backgroundImage}></Image>
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

          <Text style={styles.showPassword}>Показати</Text>
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
        color: "#212121",
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