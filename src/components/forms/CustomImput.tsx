import React, { useState, forwardRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Controller, UseFormReturn } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  placeholder?: string;
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  iconName?: string;
  keyboardType?:
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad";
  onPressIcon?: () => void;
  disabled?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
}

const DefaultInput = forwardRef<TextInput, Props>(
  (
    {
      placeholder,
      form,
      name,
      label,
      iconName,
      keyboardType,
      onPressIcon,
      disabled,
      secureTextEntry,
      multiline,
    }: Props,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <View className="mb-4 w-full">
        {/* Label */}
        {label && (
          <Text className="text-gray-800 text-lg pb-1">{label}</Text>
        )}
        <View className="relative">
          {/* Input Controlado */}
          <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="bg-white p-4 rounded-lg text-gray-800 placeholder-gray-400 shadow-sm"
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                onBlur={onBlur}
                ref={ref}
                keyboardType={keyboardType}
                onChangeText={onChange}
                value={value}
                editable={!disabled}
                multiline={multiline}
                numberOfLines={multiline ? 8 : 1}
                secureTextEntry={secureTextEntry && !showPassword}
              />
            )}
          />

          {/* Ícone Principal (se houver) */}
          {iconName && (
            <TouchableOpacity
              onPress={onPressIcon}
              className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-gray-200 rounded-tr-lg rounded-br-lg"
            >
              <Ionicons
                // @ts-expect-error - Tipo de ícone flexível
                name={iconName}
                size={24}
                color="#4B5563"
              />
            </TouchableOpacity>
          )}

          {/* Alternar Senha Visível/Ocultar */}
          {secureTextEntry && (
            <TouchableOpacity
              className="absolute right-4 top-3"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="#4B5563"
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Mensagens de Erro */}
        {form.formState.errors[name]?.message && (
          <Text className="text-red-500 text-sm mt-1">
            {form.formState.errors[name].message as string}
          </Text>
        )}
      </View>
    );
  }
);

export default DefaultInput;
