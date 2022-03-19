import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import * as imagePicker from "expo-image-picker";

export default function App() {
  const [URimage, setUriImage] = useState();

  const verifiPermision = async () => {
    const { granted } = await imagePicker.requestCameraPermissionsAsync();
    if (granted) {
      return true;
    }
    Alert.alert("permisos insuficientes", "otorge permiso a la camara", [
      { text: "Ok" },
    ]);
    return false;
  };

  const HandlerTakeImage = async () => {
    const IsCamaraOk = await verifiPermision();
    if (!IsCamaraOk) return;

    const image = await imagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setUriImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_tittle}>
        <Text style={styles.tittle}>Toma tu foto</Text>
      </View>
      <View style={styles.container_camera}>
        {!URimage ? (
          <Text style={styles.text_camera}>no hay imagen...</Text>
        ) : (
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={{ uri: URimage }}
          />
        )}
      </View>
      <View style={styles.container_button}>
        <TouchableOpacity style={styles.button} onPress={HandlerTakeImage}>
          <Text style={styles.button_text}>Tomar Foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bc2525",
  },

  container_tittle: {
    padding: 10,
  },

  tittle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  container_camera: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: "30%",
    justifyContent: "center",
    borderRadius: 10,
  },

  text_camera: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  container_button: {
    padding: 20,
  },

  button: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: 200,
    height: 40,
    justifyContent: "center",
  },

  button_text: {
    color: "blue",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});
