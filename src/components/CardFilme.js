//import o asyncStorage do expo
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
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
    //return Alert.alert("deu certo");
    /* Etapas para uso do async storage
    1) Carregamento do storage do aparelho (se houver, caso contrário retorna null)
    2) Havendo storage prévio, transformar os dados do filme em objeto e os guardamos em uma lista(array)
    3) Se a lista não for indefinida, vamos iniciá-la vazia
    4) Adicionamos os dados do filme na lista (array) 
    5) Finalmente, salvamos no storage do dispositivo
    */
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos");
    console.log(filmesFavoritos);
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
