import React from "react";
import {Image, StyleSheet, Text, View, } from "react-native";
import UserPhoto from './img/Userphoto.png'
import Ionicons from "react-native-vector-icons/Ionicons";


export default function PostsScreen() {

    return (
    <View style={styles.container}>
        <View style={styles.postPage}>
            <View style={styles.header}>             
                    <Text style={styles.title}>Публікації</Text>
                    <Ionicons name="log-out-outline" size={24} style={styles.logOut} />
            </View>
            <View style={styles.body}>
                <View style={styles.userSection}>
                    <Image source={UserPhoto} style={styles.userPhoto}/>
                    <View style={styles.userInfo}>            
                        <Text style={styles.userName}>Natali Romanova</Text>
                        <Text style={styles.userEmail}>email@example.com</Text>
                    </View>
                </View>
            </View>
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
        backgroundColor: 'white',
        flex: 0,
    },

    postPage: {
        height: 720,
        display: 'flex',
        justifyContent: 'space-between',
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

    logOut: {
        position: 'absolute',
        top: 2,
        right: 10,
        color: '#BDBDBD'
    },
    
    body: {
        marginTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 680,
        gap: 8,
    },

    userSection: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        gap: 8,
    },

    userPhoto: {
        borderRadius: 16,
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userName: {
        fontSize: 13,
        fontWeight: 700,
    },
    userEmail: {
        fontSize: 11,
        fontWeight: 400,
    },

});