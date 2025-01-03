import React from 'react';
import { View, Text, Button, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationProp = StackNavigationProp<RootStackParamList, "ContactList">;

const ContactListScreen = ({ navigation }: { navigation: NavigationProp }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>ContactListScreen</Text>
        <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
      </View>
    </SafeAreaView>
  );
};

export default ContactListScreen;