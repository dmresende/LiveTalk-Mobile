import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList, "Chat">;

const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;