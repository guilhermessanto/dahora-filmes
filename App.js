import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>Dá Hora Filmes</Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Button title="Buscar Filmes" />
        <Button title="Favoritos" />
      </View>
      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewLogo: {
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    flex: 3,
  },
  viewBotoes: {
    backgroundColor: "orange",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 2,
    alignItems: "flex-start",
  },
  viewRodape: {
    backgroundColor: "red",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.5,
    alignItems: "flex-start",
  },
});
