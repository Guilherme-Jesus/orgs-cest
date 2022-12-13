import React from "react";
import { Image } from "react-native";
import topo from "../../../../assets/topo.png";
import TextProp from "../../../components/Text";

export default function Topo({ styles, titulo }) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <TextProp style={styles.titulo}> {titulo}</TextProp>
    </>
  );
}
