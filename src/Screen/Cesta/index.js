import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import TextProp from "../../components/Text";
import Details from "./components/Details";
import Itens from "./components/Itens";
import Topo from "./components/Topo";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={({ item: { nome, imagem } }) => (
          <View key={nome} style={styles.item}>
            <Image style={styles.imagemItens} source={imagem} />
            <TextProp style={styles.nomeItens}>{nome}</TextProp>
          </View>
        )}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} styles={styles} />
              <View style={styles.cesta}>
                <Details styles={styles} {...detalhes} />
                <Itens styles={styles} {...itens} />
              </View>
            </>
          );
        }}
        keyExtractor={({ nome }) => nome}
      />
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
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 23,
    fontWeight: "bold",
  },
  tituloItens: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagemItens: {
    width: 46,
    height: 46,
  },

  nomeItens: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
