import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Antipanic({}) {
  //funcion para llamar a hospital
  const handlerMedicalPress = async () => {
    await Linking.openURL("tel:+107");
  };
  //funcion para llamar a policia
  const handlerPolicepPress = async () => {
    await Linking.openURL("tel:+911");
  };
  //funcion para llamar a asistencia
  const handlerassistancePress = async () => {
    await Linking.openURL("tel:+08102227572");
  };
  //funcion para llamar a bomberos
  const handlerfirefightersPress = async () => {
    await Linking.openURL("tel:+100");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <Image source={require("../img/logo/logo.png")} />
      </View>
      <View style={styles.all_container}>
        <TouchableOpacity
          style={styles.button_init}
          onPress={handlerMedicalPress}
        >
          <Fontisto name="ambulance" size={64} color="black" />
          <Text style={styles.text_init}>Emergencia medica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_init}
          onPress={handlerPolicepPress}
        >
          <MaterialCommunityIcons
            name="police-badge"
            size={64}
            color="#24527a"
          />
          <Text style={styles.text_init}>Policia</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.all_container}>
        <TouchableOpacity
          style={styles.button_init}
          onPress={handlerassistancePress}
        >
          <Entypo name="help" size={64} color="#bc2525" />
          <Text style={styles.text_init}>Asistencia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_init}
          onPress={handlerfirefightersPress}
        >
          <FontAwesome5 name="fire" size={64} color="#e8630a" />
          <Text style={styles.text_init}>Bomberos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f24c1",
    height: "100%",
    margin: 0,
  },

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
    marginTop: 20,
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
    paddingTop: 45,
    paddingBottom: 45,
    flex: 0.5,
    borderRadius: 20,
  },
});
