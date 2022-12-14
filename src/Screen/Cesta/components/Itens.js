import React from "react";
import TextProp from "../../../components/Text";

export default function Itens({ styles, titulo }) {
  return (
    <>
      <TextProp style={styles.tituloItens}>{titulo}</TextProp>
    </>
  );
}
