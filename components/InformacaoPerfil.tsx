import { StyleSheet, Text, View } from "react-native";

const InformacaoPerfil = ({ text }: any) => {
  return (
    <View style={styles.containerInfoText}>
      <Text style={styles.userInfoPerfil}>{text}</Text>
    </View>
  );
};

export default InformacaoPerfil;

const styles = StyleSheet.create({
  containerInfoText: {
    backgroundColor: "#1E1E1E",
    height: 50,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoPerfil: {
    color: "#fff",
    fontSize: 20,
  },
});
