import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import api from "../services/api";
import apiKey from "../../apiKey";

const Resultados = ({ route }) => {
  const { filme } = route.params;
  const [resultados, seteResultados] = useState([]);
  /* useEffect: Hook do React que executa operações no momento em que o componente (neste caso, Resultado) é renderizado */
  useEffect(() => {
    /* Assim que entrarmos em Resultado, é executada a função async buscarFilmes que por sya vez através do axios executa a cunsulta à API baseada no filme que foi digitado. */
    async function buscarFilmes() {
      try {
        /* Aguardamos a respossta da consulta get ao endpoint "/search/movie" da api. Observe qye este endpoint precisa de parâmetros para a execução correta da consulta. Este parâmetros DEVEM ter o mesmo nome indicado na documentação do endpoint//API. */
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });
        seteResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}>{resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  viewFilmes: {
    marginVertical: 8,
  },
});
