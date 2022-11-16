import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} color="#5451a6" />
              Leia mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao}>
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
