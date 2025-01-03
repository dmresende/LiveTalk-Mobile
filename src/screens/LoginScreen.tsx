import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: { navigation: NavigationProp }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("ContactList")} />
    </View>
  );
};

export default LoginScreen;