import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/RootNavigator';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DefaultInput from '@/components/forms/CustomImput';
import DefaultButtonAction from '@/components/DefaultButtonAction';
import DefaultLayout from '@/components/DefaultLayout';
import { toast } from '@backpackapp-io/react-native-toast';

type NavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const schema = z
  .object({
    name: z.string().min(1, 'Campo obrigatório'),
    email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
    password: z
      .string()
      .min(4, 'Campo obrigatório, pelo menos 4 caracteres'),
    confirmPassword: z
      .string()
      .min(4, 'Campo obrigatório, pelo menos 4 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem corresponder',
    path: ['confirmPassword'],
  })

const RegisterScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    toast.success("Cadastrado realizado com sucesso!");
    console.log(data);
    navigation.navigate("Login");
  };

  return (
    <DefaultLayout>
      <View className="h-full justify-center items-center bg-gray-100">
        <Text className="text-3xl font-bold mb-8 text-blue-600">Criar conta</Text>
        <View className='w-4/5'>
          <DefaultInput form={form} name="name" label='Nome' />
          <DefaultInput form={form} name="email" label='Email' />
          <DefaultInput form={form} name="password" secureTextEntry label='Senha' />
          <DefaultInput form={form} name="confirmPassword" secureTextEntry label='Confirmar Senha' />
          <DefaultButtonAction title='Salvar' onpress={form.handleSubmit(onSubmit)} />

          {/* Link para login */}
          <TouchableOpacity
            className="mt-4"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-blue-600 underline">Já tem uma conta? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default RegisterScreen;
