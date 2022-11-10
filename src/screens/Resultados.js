import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Resultados = ({ route }) => {
  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
