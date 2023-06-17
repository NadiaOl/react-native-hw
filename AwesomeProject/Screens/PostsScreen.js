import React from "react";
import {Image, StyleSheet, Text, View, } from "react-native";
import UserPhoto from './img/Userphoto.png'
import LogOut from './img/log-out.jpg'
import Menu from './img/grid.jpg'
import AddPost from './img/new.jpg'
import User from './img/user.png'



export default function PostsScreen() {

    return (
    <View style={styles.container}>
        <View style={styles.postPage}>
            <View style={styles.header}>             
                    <Text style={styles.title}>Публікації</Text>
                    <Image source={LogOut} style={styles.logOut}/>
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
            <View style={styles.footer}>
                <Image source={Menu} style={styles.menuBtn}/>
                <Image source={AddPost} style={styles.addPostBtn}/>
                <Image source={User} style={styles.userBtn}/>
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
        width: 390,
        color: '#212121'
    },

    postPage: {
        marginTop: 44,
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
        right: 10,
    },
    
    body: {
        marginTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 600,
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
    footer: {
        display: 'flex',
        alignContent: 'space-between',
        gap: 31,
        flexDirection: 'row',
        paddingLeft: 82,
        paddingRight: 82,
        paddingTop: 10,
        borderColor: '#BDBDBD',
        borderTopWidth: 1,
    },
});