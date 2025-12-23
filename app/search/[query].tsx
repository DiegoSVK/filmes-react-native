import { API_KEY } from "@/constants/API_KEY";
import { MovieDetails } from "@/types/MovieTypes";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LARGURA = Dimensions.get("window").width;
const NUM_COLUNAS = 3;

const QueryMovie = () => {
  const { query } = useLocalSearchParams();
  const [catalogoDeFilmes, setCatalogoDeFilmes] = useState<MovieDetails[]>([]);

  //fech API
  useEffect(() => {
    async function fechAPI() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`,
        API_KEY
      );
      const data = await response.json();
      console.log(JSON.stringify(data, null, 2));
      setCatalogoDeFilmes(data.results);
    }
    fechAPI();
  }, [query]);

  const catalogoFilmes = ({ item }: { item: MovieDetails }) => {
    const base_url = "https://image.tmdb.org/t/p/w500";
    return (
      <Link href={`/detalhesDoFilme/${item.id}`} asChild>
        <TouchableOpacity style={styles.card}>
          <Image
            source={{ uri: `${base_url}${item.poster_path}` }}
            style={styles.logoPoster}
          />
          <Text style={styles.filmeTitleText}>{item.title}</Text>
        </TouchableOpacity>
      </Link>
    );
  };

  const buscaVazia = () => {
    return (
      <View style={styles.BuscaVaziaContainer}>
        <Text style={styles.buscaVaziaText}>
          Nenhum filme encontrado para {query}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={catalogoDeFilmes}
        renderItem={catalogoFilmes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={NUM_COLUNAS}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 5 }}
        contentContainerStyle={{ gap: 5, paddingBottom: 100 }}
        ListHeaderComponent={
          <Text style={styles.tituloQuery}>Resultados para : {query}</Text>
        }
        ListEmptyComponent={buscaVazia}
      />
    </View>
  );
};

export default QueryMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  generoTitleText: {
    color: "#fff",
    fontSize: 30,
    paddingHorizontal: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    width: "31%",
    borderRadius: 8,
    marginBottom: 10,
  },
  logoPoster: {
    width: "100%",
    height: 150,
    marginBottom: 5,
    borderRadius: 10,
  },
  filmeTitleText: {
    color: "#fff",
    textAlign: "center",
  },
  tituloQuery: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  BuscaVaziaContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  buscaVaziaText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
