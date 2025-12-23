import { StyleSheet, Text, TouchableOpacity } from "react-native";

const IndisponivelBTN = () => {
  return (
    <TouchableOpacity style={styles.containerBtn}>
      <Text style={styles.textBTN}>Indisponível</Text>
    </TouchableOpacity>
  );
};

export default IndisponivelBTN;

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
