import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toasts } from '@backpackapp-io/react-native-toast';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className='flex-1 items-center justify-center'>
        <View>{children}</View>
        <Toasts />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default DefaultLayout;