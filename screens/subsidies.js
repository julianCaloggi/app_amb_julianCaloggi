import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Subsidies() {
  return (
    <View style={styles.container}>
      <View style={styles.container_tittle_subs}>
        <Text style={styles.tittle_subs}>Subsidios</Text>
      </View>

      <View style={styles.container_button_subs}>
        <TouchableOpacity style={styles.button_subs}>
          <Text style={styles.text_button_subs}>Subsidio por</Text>
          <Text style={styles.text_button_subs}>nacimiento</Text>

          <View style={styles.container_img_nac}>
            <Image source={require("../img/nacimiento.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_subs}>
          <Text style={styles.text_button_subs}>Subsidio por</Text>
          <Text style={styles.text_button_subs}>matrimonio</Text>

          <View style={styles.container_img_matr}>
            <Image source={require("../img/matrimonio.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_subs}>
          <Text style={styles.text_button_subs}>Subsidio por</Text>
          <Text style={styles.text_button_subs}>fallecimiento</Text>

          <View style={styles.container_img_fall}>
            <Image source={require("../img/fallecimiento.png")} />
          </View>
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

  container_button_subs: {
    margin: 10,
  },

  button_subs: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },

  text_button_subs: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#bc2525",
    marginTop: -5,
  },

  container_tittle_subs: {
    padding: 15,
  },

  tittle_subs: {
    textAlign: "center",
    fontSize: 54,
    fontWeight: "bold",
    color: "#ffffff",
  },

  container_img_nac: {
    paddingLeft: 15,
  },

  container_img_matr: {
    alignItems: "flex-end",
    paddingRight: 15,
  },

  container_img_fall: {
    alignItems: "flex-end",
    paddingRight: 15,
  },
});
