import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, "ContactList">;

const ContactListScreen = ({ navigation }: { navigation: NavigationProp }) => {
  return (
    <View>
      <Text>ContactListScreen</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default ContactListScreen;