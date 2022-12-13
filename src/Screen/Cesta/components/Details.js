import React from "react";
import { Image, View } from "react-native";
import TextProp from "../../../components/Text";
export default function Details({
  styles,
  nome,
  logoFarm,
  nomeFazenda,
  descricao,
  preco,
}) {
  return (
    <>
      <TextProp style={styles.nome}>{nome}</TextProp>
      <View style={styles.fazenda}>
        <Image source={logoFarm} style={styles.logo} />
        <TextProp style={styles.nomeFazenda}>{nomeFazenda}</TextProp>
      </View>
      <TextProp style={styles.descricao}>{descricao}</TextProp>
      <TextProp style={styles.preco}> {preco}</TextProp>
    </>
  );
}
