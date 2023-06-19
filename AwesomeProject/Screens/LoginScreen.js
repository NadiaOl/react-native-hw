import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, } from "react-native";
import BackgroundImage from './img/PhotoBGpng.png'



export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onLogin = () => {
    console.log(`${password} + ${email}`);
  };

  return (

      <View style={styles.container}>
        <View style={styles.keyboard}>
        <Image source={BackgroundImage} style={styles.backgroundImage}></Image>
        <View style={styles.registrationSection}>

          <Text style={styles.title}>Увійти</Text>
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
          <Text style={styles.showPassword}>Показати</Text>
          <Text style={styles.button} onPress={onLogin}>Увійти</Text>
          <Text style={styles.signIn}>Немає акаунту?  Зареєструватися</Text>

        </View>
        </View>
      </View>
  )
};

  const styles = StyleSheet.create({
    
    container: {
      fontFamily: 'Roboto-Regular',
      padding: 10,
      width: 390,
      justifyContent: "flex-end",
      marginTop: 18,
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
      top: 270,
      left: 2,
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
      marginTop: 60,
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
      top: 219,
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