import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  onpress?: () => void;
  title: string;
}

const DefaultButtonAction = ({
  onpress,
  title,
}: Props) => {
  return (
    <TouchableOpacity
      className="h-12 p-3 rounded-lg mt-6 w-full bg-blue-600"
      onPress={onpress}
    >
      <Text
        className="text-center font-medium text-white"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButtonAction;
