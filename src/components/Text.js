import { StyleSheet, Text } from "react-native";

export default function TextProp({ children, style }) {
  let estilo = styles.text;
  if (estilo?.fontWeight === "bold") {
    estilo = styles.textBold;
  }

  return <Text style={[style, styles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
