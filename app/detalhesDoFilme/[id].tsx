import IndisponivelBTN from "@/components/IndisponivelBTN";
import InfoDetalhes from "@/components/InfoDetalhes";
import TrailerBTN from "@/components/TrailerBTN";
import { API_KEY } from "@/constants/API_KEY";
import { MovieDetails } from "@/types/MovieTypes";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AlturaTela = Dimensions.get("window").height;

const CHAVE_STORAGE = "meusfavoritos";

const DetalhesDoFilme = () => {
  const { id, title } = useLocalSearchParams();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [filme, setFilme] = useState<MovieDetails | null>(null);
  const [trailerKey, setTrailerKey] = useState<string>("");
  const [favoriteMovie, setFavoriteMovie] = useState(false);

  useEffect(() => {
    async function fecthDetalhesFilme() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=pt-br`,
        API_KEY
      );
      const data = (await response.json()) as MovieDetails;

      setFilme(data);

      const responseVideo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_KEY
      );
      const dataVideo = await responseVideo.json();

      const trailerFilmes = dataVideo.results.find(
        (video: any) => video.site === "YouTube" && video.type === "Trailer"
      );

      if (!trailerFilmes) {
        const novaBusca = dataVideo.results.find(
          (video: any) => video.site === "YouTube"
        );
        if (novaBusca) {
          setTrailerKey(novaBusca.key);
        }
      } else {
        setTrailerKey(trailerFilmes.key);
      }
    }
    fecthDetalhesFilme();
  }, [id]);

  const handleFavorite = async () => {
    try {
      const listaAtual = await AsyncStorage.getItem(CHAVE_STORAGE);
      const listarray = listaAtual ? JSON.parse(listaAtual) : [];
      const verificarFilme = listarray.some((item) => item.id === filme.id);
      let novaListaFavoritos = [];
      if (verificarFilme) {
        novaListaFavoritos = listarray.filter((item) => item.id !== filme.id);
      } else {
        novaListaFavoritos = [...listarray, filme];
      }

      await AsyncStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(novaListaFavoritos)
      );
      setFavoriteMovie(!favoriteMovie);
    } catch (error) {
      console.error("Falha", error);
      Alert.alert("Falha ao carregar lista de filmes");
    }
  };

  useEffect(() => {
    async function verificarFilme() {
      try {
        const listaAtual = await AsyncStorage.getItem(CHAVE_STORAGE);
        const listArray = listaAtual ? JSON.parse(listaAtual) : [];
        const filmeNaLista = listArray.some((item) => item.id === Number(id));
        setFavoriteMovie(filmeNaLista);
      } catch (e) {
        console.error("Erro ao verificar filme", e);
      }
    }
    if (id) {
      verificarFilme();
    }
  }, [id]);

  if (!filme) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: "#fff", fontSize: 25 }}>Carregando</Text>
        <Image
          source={require("../../assets/loading.gif")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: `${baseUrl}${filme.backdrop_path}` }}
          style={styles.logoPoster}
        />
        <View style={styles.favoriteMovie}>
          <TouchableOpacity onPress={handleFavorite}>
            <AntDesign
              name="heart"
              size={30}
              color={favoriteMovie ? "red" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>{filme.title}</Text>
      </View>

      {/* Detalhes calendario/genero,tempo,votos */}
      <View style={styles.infoDetail}>
        <InfoDetalhes
          icon={"calendar"}
          text={filme.release_date.split("-")[0]}
        />
        <InfoDetalhes
          icon={"video-camera"}
          text={filme.genres?.[0]?.name ?? "Sem Categoria"}
        />
        <InfoDetalhes
          icon={"clock-circle"}
          text={`${Math.floor(filme.runtime / 60)}h ${String(
            filme.runtime % 60
          ).padStart(2, "0")}m`}
        />
        <InfoDetalhes
          icon={"star"}
          text={filme.vote_average.toFixed(1)}
          color={"yellow"}
        />
      </View>
      {/* titulo Sinopse */}
      <View style={styles.sinopseContainer}>
        <Text style={styles.tituloSinopse}>Sinopse</Text>
        <Text style={styles.textSinopse}>
          {filme.overview || "Indisponível"}
        </Text>
      </View>

      <View style={styles.containerBtn}>
        {trailerKey ? (
          <TrailerBTN chaveTrailer={trailerKey} />
        ) : (
          <IndisponivelBTN />
        )}
      </View>
    </ScrollView>
  );
};

export default DetalhesDoFilme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  logoContainer: {
    position: "relative",
    width: "100%",
    height: AlturaTela * 0.35,
  },
  favoriteMovie: {
    position: "absolute",
    top: 25,
    right: 10,
  },
  logoPoster: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {},
  titulo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    padding: 10,
  },
  infoDetail: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  sinopseContainer: {
    width: "100%",
    marginTop: 10,
  },
  tituloSinopse: {
    marginLeft: 20,
    padding: 10,
    color: "#fff",
    fontSize: 25,
  },
  textSinopse: {
    color: "#ccc",
    textAlign: "left",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  containerBtn: {
    marginTop: 40,
    marginBottom: 60,
    width: "100%",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
