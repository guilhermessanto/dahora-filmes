import { useFonts } from "expo-font";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [loaded] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  if (!loaded) return <Text>carregando...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewLogo: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    flex: 3,
  },
  tituloApp: {
    fontFamily: "monoton",
    fontSize: 36,
    color: "#5451a6",
  },
  viewBotoes: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 2,
    alignItems: "flex-start",
  },
  viewRodape: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.5,
    alignItems: "flex-start",
  },
});
