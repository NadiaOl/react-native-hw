import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();

  const focusedIcon = (name, size, focused) => {
    const iconColor = focused ? "#FF6C00" : "#4D4D4D";

    return (
      <View>
        <Ionicons
          name={name}
          size={size}
          style={ {color: iconColor} }
        />
      </View>
    );
  };

  return (
<>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            height: 60,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="Menu"
          component={PostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
            focusedIcon("md-grid-outline", 24, focused),
          }}
        />
        <Tabs.Screen
          name="User"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
            focusedIcon("person-outline", 24, focused),
          }}
        />
      </Tabs.Navigator>
      <Text style={styles.addButton} onPress={() => navigation.navigate("CreatePosts")}>

      </Text>
      <Ionicons name="add" size={20} style={styles.plus} />
  
</>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    left: 163,
    bottom: 9,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
  plus: {
    position: "absolute",
    left: 187,
    bottom: 17,
    color: "white",

  },
});
