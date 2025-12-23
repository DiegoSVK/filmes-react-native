import { infoTrailer } from "@/types/MovieTypes";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const TrailerBTN = ({ chaveTrailer }: infoTrailer) => {
  const url = `https://www.youtube.com/watch?v=${chaveTrailer}`;

  const handlePress = async () => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error(error);
      Alert.alert("Não foi possivel exibir o trailer");
    }
  };

  return (
    <TouchableOpacity style={styles.containerBtn} onPress={handlePress}>
      <Text style={styles.textBTN}> Ver Trailer</Text>
    </TouchableOpacity>
  );
};

export default TrailerBTN;

const styles = StyleSheet.create({
  textBTN: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  containerBtn: {
    backgroundColor: "#FF0044",
    paddingVertical: 15,
    borderRadius: 20,
    width: "60%",
  },
});
