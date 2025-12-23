import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

const ConfigLanguage = ({ text, textConfig, iconName }: any) => {
  return (
    <View style={styles.containerInfoText}>
      <MaterialIcons name={iconName} size={30} color="#ccc" />
      <View style={styles.textContainer}>
        <Text style={styles.userInfoPerfil}>{text}</Text>
        <Text style={styles.configUserPerfil}>{textConfig}</Text>
      </View>
      <Feather name="arrow-up-right" size={24} color="#ccc" />
    </View>
  );
};

export default ConfigLanguage;

const styles = StyleSheet.create({
  containerInfoText: {
    backgroundColor: "#1E1E1E",
    width: "90%",
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textContainer: {
    padding: 5,
  },
  userInfoPerfil: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  configUserPerfil: {
    color: "#ccc",
    fontSize: 18,
  },
});
