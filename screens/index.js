import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index({ navigation }) {
  //controlador para la solicitud de credito
  const handlerCreditsPress = () => {
    navigation.navigate("Solicitud de credito");
  };
  //controlador para el boton antipanico
  const handlerPanicPress = () => {
    navigation.navigate("Boton Antipanico");
  };
  //controlador para los subsidios
  const handlerSubsidiePress = () => {
    navigation.navigate("Subsidio");
  };
  //funcion para rediriguir al whatssap de amebo (pedir numero)
  const handlerWhatappPress = async () => {
    await Linking.openURL("https://wa.me/+542215486483");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.Scroll}>
        <View style={styles.container_header}>
          <Image source={require("../img/logo/logo.png")} />
        </View>

        <View style={styles.all_container}>
          <TouchableOpacity style={styles.button_init}>
            <Image source={require("../img/credencial.png")} />
            <Text style={styles.text_init}>Credencial</Text>
            <Text style={styles.text_init}>Digital</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_init}
            onPress={handlerPanicPress}
          >
            <Image source={require("../img/antipanico.png")} />
            <Text style={styles.text_init}>Boton</Text>
            <Text style={styles.text_init}>Antipanico</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.all_container}>
          <TouchableOpacity
            style={styles.button_mid}
            onPress={handlerCreditsPress}
          >
            <View style={styles.button_mid_container_text}>
              <Text style={styles.text_mid}>Calcula y</Text>
              <Text style={styles.text_mid}>solicita tu</Text>
              <Text style={styles.text_mid}>prestamo</Text>
            </View>
            <View style={styles.button_mid_container_img}>
              <Image
                style={styles.img_mid}
                source={require("../img/calculadora.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.all_container}>
          <TouchableOpacity style={styles.button_init}>
            <Image source={require("../img/cartilla.png")} />
            <Text style={styles.text_init}>Cartilla de</Text>
            <Text style={styles.text_init}>presentacion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_init}
            onPress={handlerWhatappPress}
          >
            <Image source={require("../img/wtsp.png")} />
            <Text style={styles.text_init}>Escribinos por</Text>
            <Text style={styles.text_init}>Whatsapp</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.all_container}>
          <TouchableOpacity
            style={styles.button_end}
            onPress={handlerSubsidiePress}
          >
            <Text style={styles.text_end_blue}>Subsidios</Text>
            <View>
              <Text style={styles.text_end_red}>Matrimonio</Text>
              <Text style={styles.text_end_red}>Nacimiento</Text>
              <Text style={styles.text_end_red}>Fallecimiento</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.box_bell_end}>
            <MaterialCommunityIcons
              name="bell-ring"
              size={64}
              color="#eec60a"
              style={styles.bell_icon}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f24c1",
    height: "100%",
    margin: 0,
  },

  Scroll: { marginTop: 0 },

  container_header: {
    paddingTop: 20,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  all_container: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },

  container_mid: {
    marginLeft: 20,
    marginRight: 20,
  },

  text_init: {
    color: "#2f24c1",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  button_init: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 20,
    flex: 0.5,
    borderRadius: 20,
  },

  button_mid: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 20,
    flex: 1,
    borderRadius: 20,
  },

  text_mid: {
    color: "#2f24c1",
    fontWeight: "bold",
    fontSize: 20,
  },

  button_mid_container_img: {
    marginLeft: 20,
    marginRight: 20,
    height: "100%",
  },

  button_mid_container_text: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: "100%",
  },

  button_end: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 20,
    flex: 0.7,
    borderRadius: 20,
  },

  box_bell_end: { flex: 0.4 },

  text_end_blue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f24c1",
    marginTop: 20,
  },

  text_end_red: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#bc2525",
  },

  bell_icon: {
    alignItems: "center",
    textAlign: "center",
    margin: 10,
  },
});
