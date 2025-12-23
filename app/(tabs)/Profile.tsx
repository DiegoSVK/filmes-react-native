import ConfigLanguage from "@/components/ConfigLanguage";
import InformacaoPerfil from "@/components/InformacaoPerfil";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.perfilContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.imagePerfil}
        />
      </View>
      <View style={styles.containerInfo}>
        <InformacaoPerfil text={"User Name"} />
        <InformacaoPerfil text={"user@teste.com.br"} />
      </View>
      <View style={styles.configContainer}>
        <ConfigLanguage
          text={"Região"}
          textConfig={"Brasil"}
          iconName={"language"}
        />
        <ConfigLanguage
          text={"Audio & Legendas"}
          textConfig={"Português (BR)"}
          iconName={"closed-caption-off"}
        />
        <ConfigLanguage
          text={"Qualidade de Vídeo"}
          textConfig={"Automático (HD)"} // Dá um ar de streaming real
          iconName={"hd"}
        />
        <ConfigLanguage
          text={"Plano"}
          textConfig={"Grátis (Com Anúncios)"} // Dá um ar de streaming real
          iconName={"attach-money"}
        />
      </View>
      <TouchableOpacity style={styles.btnLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  perfilContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  imagePerfil: {
    width: 120,
    height: 120,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 60,
    resizeMode: "cover",
  },
  containerInfo: {
    gap: 10,
    marginTop: 10,
    width: "100%",
  },
  configContainer: {
    marginTop: 50,
    alignItems: "center",
    gap: 10,
  },
  btnLogout: {
    backgroundColor: "#1E1E1E",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 30,
  },
  logoutText: {
    color: "#E50914",
    fontSize: 20,
  },
});
