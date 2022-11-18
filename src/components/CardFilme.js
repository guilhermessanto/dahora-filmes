//import o asyncStorage do expo
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Vibration,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fundo from "../../assets/images/sem-imagem.jpg";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;
  /* Acessar recursos do React Navigation (Sem props) */
  const navigation = useNavigation();

  const leiaMais = () => {
    navigation.navigate("Detalhes", { filme });
  };
  const salvar = async () => {
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos");
    let listaDeFilmes = JSON.parse(filmesFavoritos);
    if (!listaDeFilmes) {
      listaDeFilmes = [];
    }
    /* Etapa de verifivcação de filmes já existente */
    /*  Para cada filme existente na listaDeFilmes (ja existente), vamos verigicar se o id do filme existente é igual o id do filme do card */

    for (let filmeExistente in listaDeFilmes) {
      if (listaDeFilmes[filmeExistente].id == filme.id) {
        Alert.alert("Ops!", "Você já salvou esse filme!");
        Vibration.vibrate();
        return;
      }
    }

    listaDeFilmes.push(filme);
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeFilmes));
    Alert.alert("Favoritos", "Salvo com sucesso!");
  };
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={
          poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }
            : fundo
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} color="#5451a6" />
              Leia mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="save" size={12} color="#5451a6" />
              Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;

const estilos = StyleSheet.create({
  card: {
    width: "95%",
    marginHorizontal: "2.5%",
    height: 185,
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imagem: {
    flex: 1,
    height: 180,
    width: 100,
  },
  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
