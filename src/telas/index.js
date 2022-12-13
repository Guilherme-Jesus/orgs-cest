import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";
export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.titulo}> Detalhes da cesta</Text>
      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <View style={styles.fazenda}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.descricao}>
          Cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Text>
        <Text style={styles.preco}>R$40,00</Text>
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
