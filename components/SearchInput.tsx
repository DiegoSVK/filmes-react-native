import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

const SearchInput = () => {
  const router = useRouter();
  const [texto, setTexto] = useState("");

  const handleSearch = () => {
    if (texto.trim() === "") {
      Alert.alert("Favor inserir o nome do Filme");
      return;
    }

    router.push({
      pathname: "/search/[query]",
      params: {
        query: String(texto),
      },
    });

    setTexto(" ");
  };

  return (
    <View style={styles.inputContainer}>
      <EvilIcons name="search" size={24} color="black" />
      <TextInput
        style={styles.inputSearch}
        value={texto}
        onChangeText={setTexto}
        onSubmitEditing={handleSearch}
        placeholder="Buscar"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  inputSearch: {
    width: "100%",

    height: 40,
    paddingHorizontal: 10,
  },
});
