import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";
import TextProp from "../components/Text";

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <TextProp style={styles.titulo}> Detalhes da cesta</TextProp>
      <View style={styles.cesta}>
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
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#fff",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    marginTop: 8,
  },
});
