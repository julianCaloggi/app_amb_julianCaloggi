import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function Subsidies() {
  const [modalVisiblenaci, setmodalVisiblenaci] = useState(false);
  const [modalVisiblematr, setmodalVisiblemaci] = useState(false);
  const [modalVisiblefall, setmodalVisiblefall] = useState(false);

  const handlePressModalnaci = () => {
    setmodalVisiblenaci(true);
  };

  const handlePressModalmatri = () => {
    setmodalVisiblemaci(true);
  };

  const handlePressModalfall = () => {
    setmodalVisiblefall(true);
  };

  const handlePressModalDelete = () => {
    setmodalVisiblenaci(false);
    setmodalVisiblemaci(false);
    setmodalVisiblefall(false);
  };

  //funcion para rediriguir al whatssap de amebo (pedir numero)
  const handlerWhatappPress = async () => {
    await Linking.openURL("https://wa.me/+542215486483");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container_tittle_subs}>
          <Text style={styles.tittle_subs}>Subsidios</Text>
        </View>

        <View style={styles.container_button_subs}>
          <TouchableOpacity
            style={styles.button_subs}
            onPress={handlePressModalnaci}
          >
            <Text style={styles.text_button_subs}>Subsidio por</Text>
            <Text style={styles.text_button_subs}>nacimiento</Text>

            <View style={styles.container_img_nac}>
              <Image source={require("../img/nacimiento.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_subs}
            onPress={handlePressModalmatri}
          >
            <Text style={styles.text_button_subs}>Subsidio por</Text>
            <Text style={styles.text_button_subs}>matrimonio</Text>

            <View style={styles.container_img_matr}>
              <Image source={require("../img/matrimonio.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_subs}
            onPress={handlePressModalfall}
          >
            <Text style={styles.text_button_subs}>Subsidio por</Text>
            <Text style={styles.text_button_subs}>fallecimiento</Text>

            <View style={styles.container_img_fall}>
              <Image source={require("../img/fallecimiento.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal transparent visible={modalVisiblenaci}>
        <View style={styles.modal_back}>
          <View style={styles.modal_box}>
            <Text style={styles.modal_text_red}>
              La Documentacion necesaria para la solicitud del subsidio por
              nacimiento es:
            </Text>
            <Text style={styles.modal_text_blue}>
              Acta de nacimiento, DNI del socio (frente y dorso) y constancia
              del CBU.
            </Text>
            <View style={styles.modal_box_container_buttons}>
              <TouchableOpacity
                onPress={handlerWhatappPress}
                style={styles.modal_buttons}
              >
                <Text style={styles.modal_buttons_text}>
                  Solicitud del subsidio por nacimiento
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePressModalDelete}
                style={styles.modal_buttons}
              >
                <Text style={styles.modal_buttons_text}>
                  Cancelar solicitud
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={modalVisiblematr}>
        <View style={styles.modal_back}>
          <View style={styles.modal_box}>
            <Text style={styles.modal_text_red}>
              La Documentacion necesaria para la solicitud del subsidio por
              matrimonio es:
            </Text>
            <Text style={styles.modal_text_blue}>
              Acta de matrimonio,DNI del socio (frente y dorso) y constancia del
              CBU.
            </Text>
            <View style={styles.modal_box_container_buttons}>
              <TouchableOpacity
                onPress={handlerWhatappPress}
                style={styles.modal_buttons}
              >
                <Text style={styles.modal_buttons_text}>
                  Solicitud del subsidio por matrimonio
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePressModalDelete}
                style={styles.modal_buttons}
              >
                <Text style={styles.modal_buttons_text}>
                  Cancelar solicitud
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={modalVisiblefall}>
        <View style={styles.modal_back}>
          <View style={styles.modal_box}>
            <Text style={styles.modal_text_red}>
              La Documentacion necesaria para la solicitud del subsidio por
              fallecimiento es:
            </Text>
            <Text style={styles.modal_text_blue}>
              Acta de defuncion, CBU donde se debe depositar, si sos concubinx
              un documento que acredite el vinculo y si sos hijx, la partida de
              nacimiento.
            </Text>
            <View style={styles.modal_box_container_buttons}>
              <TouchableOpacity
                onPress={handlerWhatappPress}
                style={styles.modal_buttons}
              >
                <Text style={styles.modal_buttons_text}>
                  Solicitud del subsidio por fallecimiento
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePressModalDelete}
                style={styles.modal_buttons}
              >
                <Text style={styles.modal_buttons_text}>
                  Cancelar solicitud
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

  modal_back: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  modal_box: {
    backgroundColor: "#ffffff",
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },

  modal_text_blue: {
    color: "#2f24c1",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },

  modal_text_red: {
    color: "#bc2525",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },

  modal_box_container_buttons: {
    alignItems: "center",
    justifyContent: "center",
  },

  modal_buttons: {
    borderColor: "#2f24c1",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 2,
    backgroundColor: "#bc2525",
  },

  modal_buttons_text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
