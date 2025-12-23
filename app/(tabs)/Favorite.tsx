import { MovieDetails } from "@/types/MovieTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CHAVE_STORAGE = "meusfavoritos";

const NUM_COLUNAS = 3;

const Favorite = () => {
  const [favoritos, setFavoritos] = useState<MovieDetails[]>([]);

  useFocusEffect(
    useCallback(() => {
      carregarFavoritos();
    }, [])
  );
  const carregarFavoritos = async () => {
    try {
      const listaSalva = await AsyncStorage.getItem(CHAVE_STORAGE);
      const converterListaFavoritos = listaSalva ? JSON.parse(listaSalva) : [];

      setFavoritos(converterListaFavoritos);
    } catch (e) {
      console.error("Falha ao carregar Favoritos", e);
    }
  };

  const listaFilmesFavoritos = ({ item }: { item: MovieDetails }) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Favoritos</Text>

      <FlatList
        data={favoritos}
        renderItem={listaFilmesFavoritos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={NUM_COLUNAS}
        columnWrapperStyle={{ gap: 10, justifyContent: "center" }}
        contentContainerStyle={{ gap: 20, paddingBottom: 20 }}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 20,
  },
  card: {
    width: 100,
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
});
