import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Detalhes = ({ route }) => {
  /* Prop de route para axessar aos dados trafegados entre a naveção entre as telas/rotas */

  /* Extraindo dos parametros da rota os dados do objeto filme */
  const { filme } = route.params;

  return <SafeAreaView></SafeAreaView>;
};

export default Detalhes;

const styles = StyleSheet.create({});
