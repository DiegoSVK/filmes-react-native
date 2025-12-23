import { API_KEY } from "@/constants/API_KEY";
import { Filme, idGeneroInfo } from "@/types/MovieTypes";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type TmdbMovieResult = {
  id: number;
  title: string;
  poster_path: string;
};
type TmdbApiResponse = {
  page: number;
  results: TmdbMovieResult[];
  total_pages: number;
  total_results: number;
};

const ListaFilmesPorGenero = ({ idGenero }: idGeneroInfo) => {
  const router = useRouter();
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    async function buscarListaFilmes() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=pt-br&with_genres=${idGenero}`,
        API_KEY
      );
      const data = (await response.json()) as TmdbApiResponse;
      const arr: Filme[] = data.results.map((item) => ({
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
      }));
      setFilmes(arr);
    }
    buscarListaFilmes();
  }, []);

  const renderFilmes = ({ item }: { item: Filme }) => {
    const base_url = "https://image.tmdb.org/t/p/w500";
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/detalhesDoFilme/[id]",
              params: {
                id: String(item.id),
                poster_path: String(item.poster_path),
                title: String(item.title),
              },
            })
          }
        >
          <Image
            source={{ uri: `${base_url}${item.poster_path}` }}
            style={styles.logoPoster}
          />
          <Text style={styles.textListaGenero}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.containerListaGenero}>
      <FlatList
        data={filmes}
        renderItem={renderFilmes}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListaFilmesPorGenero;

const styles = StyleSheet.create({
  containerListaGenero: {
    marginBottom: 10,
    paddingVertical: 8,
  },
  textListaGenero: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  cardContainer: {
    width: 150,
    marginRight: 10,
  },
  logoPoster: {
    width: 150,
    height: 180,
  },
});
