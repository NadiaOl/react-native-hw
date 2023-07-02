import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from "react-native";
import PablicationPhoto from './img/Content.jpg'
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CreatePostsScreen() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const navigation = useNavigation();
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>             
                <Text style={styles.title}>Створити публікацію</Text>
            </View>
            <View style={styles.body}>
                <Image source={PablicationPhoto}/>
                <Text style={styles.editPhoto}>Редагувати фото</Text>
                <Ionicons name="location-outline" size={24} style={styles.logLocation} />
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'#BDBDBD'}
                    placeholder="Назва..."
                    value={name}
                    textContentType="name"
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputLocation}
                    placeholderTextColor={'#BDBDBD'}
                    placeholder="Місцевість..."
                    value={location}
                    textContentType="location"
                    onChangeText={setLocation}
                />
                </KeyboardAvoidingView>
                <Text style={styles.button} onPress={() => navigation.navigate("Home")}>Опублікувати</Text>
                <Ionicons name="trash-outline" size={24} style={styles.logTrash} />
            </View>                      

        </View>
    )

};

const styles = StyleSheet.create({

    container: {
        position: 'relative',
        fontFamily: 'Roboto-Regular',
        padding: 6,
        marginTop: 44,
        width: 390,
        height: 760,
        backgroundColor: 'white',

    },

    header: {
        display: 'flex',
        alignItems: 'center',  
        borderBottomWidth: 1,
        paddingBottom: 11,
        borderColor: '#BDBDBD'
    },

    title: {
        fontSize: 17,
        fontWeight: 500,
    },

    body: {
        marginTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    editPhoto:{
        marginTop: 8,
        marginBottom: 32,
        color: '#BDBDBD',
        fontSize: 16,
    },

    input: {
        height: 50,
        width: 343,
        marginBottom: 16,
        borderBottomWidth: 1,
        paddingBottom: 11,
        borderColor: '#BDBDBD',
        color: "#212121",
        fontSize: 16,
    },

    inputLocation: {
        height: 50,
        width: 343,
        marginBottom: 16,
        borderBottomWidth: 1,
        paddingBottom: 11,
        borderColor: '#BDBDBD',
        color: "#212121",
        fontSize: 16,
        paddingLeft: 28,
    },

    logLocation: {
        position: 'absolute',
        top: 380,
        left: 14,
        color: '#BDBDBD'
    },

    button: {
        height: 50,
        width: 343,
        marginTop: 27,
        marginBottom: 100,
        backgroundColor:'#F6F6F6',
        color: '#BDBDBD',
        borderRadius: 100,
        padding: 12,
        textAlign: "center",
        fontSize: 16,
    },

    logTrash: {
        height: 50,
        width: 80,
        backgroundColor:'#F6F6F6',
        alignSelf: 'center',
        color: '#BDBDBD',
        borderRadius: 100,
        padding: 12,
        textAlign: "center",

    }

})
