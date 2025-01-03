import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/RootNavigator';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DefaultInput from '@/components/forms/CustomImput';
import DefaultButtonAction from '@/components/DefaultButtonAction';

type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const schema = z.object({
  email: z
    .string()
    .max(50, "O email deve ter no.maxcdn 50 caracteres")
    .email("Email inválido"),
  password: z
    .string()
    .max(50, "A Senha deve ter no máximo 50 caracteres")
    .min(3, "A Senha deve ter pelo menos 3 caracteres"),
});

const LoginScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };


  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-3xl font-bold mb-8 text-blue-600">Login</Text>
      <View className='w-4/5'>
        <DefaultInput form={form} name="email" label='Email' />
        <DefaultInput form={form} name="password" secureTextEntry label='Senha' />
        <DefaultButtonAction title='Entrar' onpress={form.handleSubmit(onSubmit)} />
        {/* Link para Cadastro */}
        <TouchableOpacity
          className="mt-4"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-blue-600 underline">Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
