import { infoDetalhesType } from "@/types/MovieTypes";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View } from "react-native";

const InfoDetalhes = ({ icon, text, color = "#ccc" }: infoDetalhesType) => {
  return (
    <View style={styles.infoItem}>
      <AntDesign name={icon} size={15} color={color} />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};
export default InfoDetalhes;

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  infoText: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
  },
});
