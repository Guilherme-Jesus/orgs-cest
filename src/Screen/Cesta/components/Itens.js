import React from "react";
import { Image, View } from "react-native";
import TextProp from "../../../components/Text";

export default function Itens({ styles, titulo, lista }) {
  return (
    <>
      <TextProp style={styles.tituloItens}>{titulo}</TextProp>
      {lista.map(({ nome, imagem }) => {
        return (
          <View key={nome} style={styles.item}>
            <Image style={styles.imagemItens} source={imagem} />
            <TextProp style={styles.nomeItens}>{nome}</TextProp>
          </View>
        );
      })}
    </>
  );
}
