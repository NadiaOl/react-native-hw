import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

export default function Home() {
  const Tabs = createBottomTabNavigator();

  const renderTabBarIcon = (name, size, focused) => {
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
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          height: 83,
          paddingTop: 9,
          paddingBottom: 22,
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
          
            renderTabBarIcon("md-grid-outline", 24, focused),
        }}
      />
      <Tabs.Screen
        name="Add"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.addButton}>
              <Ionicons name="add" size={20} style={styles.plus} />
            </View>
          ),
        }}
  
      />
      <Tabs.Screen
        name="User"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon("person-outline", 24, focused),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "relative",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
  plus: {
    position: "absolute",
    left: 25,
    top: 9,
    color: "white",
  },
});
