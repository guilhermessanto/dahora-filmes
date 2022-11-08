import { StatusBar, StyleSheet } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Favoritos />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
