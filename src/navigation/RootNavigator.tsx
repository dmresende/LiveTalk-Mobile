import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from '@/screens/LoginScreen';
import ContactListScreen from '@/screens/ContactList';
import ChatScreen from '@/screens/Chat';

export type RootStackParamList = {
  Login: undefined;
  ContactList: undefined;
  Chat: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <>
    <StatusBar style="dark" />
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ContactList" component={ContactListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  </>
);