import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ProfileScreen from "./screens/AddChat";
import JobsScreen from "./screens/Chat";
import proposalsScreen from "./screens/Home";
import MessageScreen from "./screens/Login";
import ContractsScreen from "./screens/Register";

// Screens names
const addchatName = "AddChat";
const chatName = "Chat";
const homeName = "Home";
const loginName = "Login";
const registerName = "Reagister";

// tab
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={addchatName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home";
            } else if (rn === loginName) {
              iconName = focused ? "ios-log-in" : "ios-log-in";
            } else if (rn === registerName) {
              iconName = focused ? "ios-create" : "ios-create";
            } else if (rn === chatName) {
              iconName = focused ? "ios-chatbox-sharp" : "ios-chatbox-sharp";
            } else if (rn === addchatName) {
              iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#1a8cff",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={loginName} component={Login} />
        <Tab.Screen name={addchatName} component={addChat} />
        <Tab.Screen name={chatName} component={Chat} />
        <Tab.Screen name={registerName} component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
