import React from "react";
import { TouchableOpacity } from "react-native";
import TextProp from "./Text";

export default function Button({ texto, onPress, styles }) {
  return (
    <TouchableOpacity style={[styles.botao]} onPress={onPress}>
      <TextProp style={styles.textoBotao}>{texto}</TextProp>
    </TouchableOpacity>
  );
}
