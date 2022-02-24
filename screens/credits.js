import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function Credits({}) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [range, setRange] = useState("0");
  const [month, setMonth] = useState("1");
  const [total, setTotal] = useState("0");

  //funcion para rediriguir al whatssap de amebo para pedir un prestamo (pedir numero)
  const handlerloanPress = async () => {
    await Linking.openURL("https://wa.me/+542215486483");
  };

  //funcion para realizar cuenta de descuento y renderizar el resultado
  function creditAccount() {}

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container_tittle_credit}>
          <Text style={styles.tittle_credit}>Solicitud de</Text>
          <Text style={styles.tittle_credit_2}>credito</Text>
        </View>

        <View style={styles.container_desc_calc}>
          <View style={styles.container_red_text}>
            <Text style={styles.red_text}>Seleciona el tipo de</Text>
            <Text style={styles.red_text}>descuento y realiza el</Text>
            <Text style={styles.red_text}>calculo on-line</Text>
          </View>

          <View style={styles.container_picker}>
            <Picker
              style={styles.picker}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            >
              <Picker.Item label="Descuento de Haberes" value="" />
              <Picker.Item label="Descuento de Haberes 2" value="" />
            </Picker>
          </View>

          <View style={styles.container_slider}>
            <Text style={styles.text_slider}>Capital:${range}</Text>
            <Slider
              style={styles.slider}
              minimumValue={5000}
              maximumValue={100000}
              minimumTrackTintColor="#29d2e4"
              maximumTrackTintColor="#29d2e4"
              thumbTintColor="#7dd87d"
              value={1}
              onValueChange={(value) => setRange(parseInt(value * 1))}
            />
            <Text style={styles.text_slider}>Tiempo:{month} meses</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={12}
              minimumTrackTintColor="#29d2e4"
              maximumTrackTintColor="#29d2e4"
              thumbTintColor="#7dd87d"
              value={1}
              onValueChange={(value) => setMonth(parseInt(value * 1))}
            />
          </View>

          <View style={styles.container_TOT_doc}>
            <Text style={styles.text_slider}>Pago mensual de:</Text>
            <Text style={styles.TOT_num}>${total}</Text>

            <View style={styles.container_expl_doc}>
              <Text style={styles.expl_doc_blue}>Documentacion necesaria:</Text>
              <Text style={styles.expl_doc_red}>
                DNI (frente y dorso),ultimo recibo de sueldo,servicios a su
                nombre,comprobante CBU y certificado de afectacion a nombre de
                AMEBO
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container_button_sol}>
          <TouchableOpacity
            style={styles.button_sol}
            onPress={handlerloanPress}
          >
            <Text style={styles.container_button_sol_text}>
              ¡Solicitalo ya!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f24c1",
    height: "100%",
  },

  container_tittle_credit: {
    margin: 10,
  },

  tittle_credit: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 50,
  },

  tittle_credit_2: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: -15,
  },

  container_desc_calc: {
    backgroundColor: "#FFFFFF",
    margin: 25,
    marginTop: 10,
    borderRadius: 15,
  },

  container_red_text: {
    margin: 10,
    padding: 5,
  },

  red_text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    marginTop: -10,
    color: "#bc2525",
  },

  container_slider: {
    marginLeft: 20,
    marginRight: 20,
  },

  text_slider: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#9ba6a5",
  },

  TOT_num: {
    color: "#42b883",
    fontWeight: "bold",
    fontSize: 20,
    borderTopColor: "#f2f2f2",
    borderTopWidth: 2,
    marginTop: 10,
  },

  container_TOT_doc: {
    marginLeft: 20,
    marginRight: 20,
  },

  container_expl_doc: {
    margin: 10,
  },

  expl_doc_blue: {
    color: "#2f24c1",
    fontWeight: "bold",
    fontSize: 16,
  },

  expl_doc_red: {
    color: "#bc2525",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "auto",
  },

  button_sol: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "45%",
    alignSelf: "flex-end",
    marginRight: 60,
    padding: 20,
    alignItems: "center",
  },

  container_button_sol_text: {
    fontWeight: "bold",
    color: "#bc2525",
    fontSize: 22,
  },

  container_picker: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 5,
    marginBottom: 5,
  },

  picker: {
    backgroundColor: "#d9dad7",
    color: "#757a79",
    fontWeight: "bold",
  },
});
