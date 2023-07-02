import React from "react";
import {Image, StyleSheet, Text, View, } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import BackgroundImage from './img/PhotoBGpng.png'
import Avatar from './img/Userphoto.png'
import Forest from './img/forest.jpg'

export default function ProfileScreen() {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
            <Image source={BackgroundImage} style={styles.backgroundImage}></Image>
            <View style={styles.profileSection}>
                <Image source={Avatar} style={styles.avatar}/>
                <Ionicons name="close-circle" size={25} style={styles.delAvatar} />
                <Ionicons name="log-out-outline" size={24} style={styles.logOut} />
                <Text style={styles.userName}>Natali Romanova</Text>
                <Image source={Forest} style={styles.forest}/>
                <Text style={styles.descriptionText}>Ліс</Text>
                <View style={styles.details}>
                    <View style={styles.reactions}>
                        <Ionicons name="chatbubble" size={25} style={styles.commentsIcon} />
                        <Text>8</Text>
                        <Ionicons name="thumbs-up-outline" size={24} style={styles.likeIcon} />
                        <Text>153</Text>
                    </View>
                    <View style={styles.location}>
                        <Ionicons name="location-outline" size={24} style={styles.logLocation} />
                        <Text style={styles.locationText}>Ukraine</Text>
                    </View>
                </View>
            </View>

    </View>
    )
};

const styles = StyleSheet.create({
    
    container: {
        fontFamily: 'Roboto-Regular',
        width: 390,
        justifyContent: "flex-end",
        position: 'relative',
    },

    backgroundImage: {
        justifyContent: "center",
        alignItems: "center",
    },

    profileSection: {
        position: 'absolute',
        top: 145,
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

    logOut: {
        position: 'absolute',
        color: '#BDBDBD',
        right: 16,
        top: 20,
    },

    delAvatar: {
        position: 'absolute',
        color: 'gray',
        right: 125,
        zIndex: 2,
        top: 20,
    },

    userName: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 500,
        color: "#212121",
        marginTop: 92,
        marginBottom: 33,
        fontSize: 30,
        textAlign: "center",
    },

    forest: {
        width: 343,
    },

    descriptionText: {
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 10,
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        gap: 120,
        alignContent: 'flex-start',
    },

    reactions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },

    location: {
        display: 'flex',
        flexDirection: 'row',
    },
    
    commentsIcon: {
        color: '#FF6C00'
    },

    likeIcon: {
        color: '#FF6C00'
    },

    locationText: {
        textDecorationLine: 'underline',
    },
});