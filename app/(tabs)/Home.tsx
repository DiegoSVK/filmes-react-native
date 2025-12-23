import ListaFilmesPorGenero from "@/components/ListaFilmesPorGenero";
import SearchInput from "@/components/SearchInput";
import { API_KEY } from "@/constants/API_KEY";
import { ApiResponse, GeneroInfo } from "@/types/MovieTypes";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//Chave api

const Home = () => {
  //router
  const router = useRouter();
  // estdado que controla os generos.
  const [generos, setGeneros] = useState<GeneroInfo[]>([]);

  useEffect(() => {
    async function startApi() {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=pt-br`,
        API_KEY
      );
      const data: ApiResponse = await response.json();
      const arrGeneros = data.genres.map((item) => ({
        id: item.id,
        genero: item.name,
      }));
      setGeneros(arrGeneros);
    }
    startApi();
  }, []);

  const renderGeneroItem = ({ item }: { item: GeneroInfo }) => {
    return (
      <TouchableOpacity
        style={styles.botaoGenero}
        onPress={() =>
          router.push({
            pathname: "/genero/[id]",
            params: {
              genero: String(item.genero),
              id: String(item.id),
            },
          })
        }
      >
        <Text style={styles.textTitleGenero}>{item.genero}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.inputContainer}>
        <SearchInput />
      </View>
      <View>
        <Text style={styles.tituloSecao}>Categorias</Text>
        <View>
          <FlatList
            data={generos}
            renderItem={renderGeneroItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* <ListaFilmesPorGenero todosOsGeneros={generos}/> */}
      {generos.map((item) => (
        <View key={item.id}>
          <Text style={styles.tituloCadaGenero}>{item.genero}</Text>
          <ListaFilmesPorGenero idGenero={item.id} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#000000",
  },
  inputContainer: {
    alignItems: "center",
  },
  textTitleGenero: {
    color: "#fff",
    fontSize: 14,
  },
  botaoGenero: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tituloSecao: {
    color: "#fff",
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  tituloCadaGenero: {
    color: "#fff",
    marginTop: 5,
    paddingHorizontal: 5,
    fontSize: 24,
  },
});
