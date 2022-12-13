import React from "react";
import { Image, View } from "react-native";
import TextProp from "../../../components/Text";
import logo from "../../../../assets/logo.png";
export default function Details({ styles }) {
  return (
    <>
      <TextProp style={styles.nome}>Cesta de Verduras</TextProp>
      <View style={styles.fazenda}>
        <Image source={logo} style={styles.logo} />
        <TextProp style={styles.nomeFazenda}>Jenny Jack Farm</TextProp>
      </View>
      <TextProp style={styles.descricao}>
        Cesta com produtos selecionados cuidadosamente da fazenda para sua
        cozinha
      </TextProp>
      <TextProp style={styles.preco}>R$40,00</TextProp>
    </>
  );
}
