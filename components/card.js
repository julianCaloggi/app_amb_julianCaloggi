import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const card = ({ name, price, descr }) => {
  const [loader] = useFonts({
    oswald: require("../assets/fonts/static/Oswald-Bold.ttf"),
  });

  if (!loader) return <AppLoading />;
  return (
    <View style={styles.card}>
      <Text style={styles.Text}>Producto: {name}</Text>
      <Text style={styles.Text}>Precio: ${price}</Text>
      <Text style={styles.top}>Descripcion: {descr}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0000ff",
    width: "45%",
    margin: 5,
    padding: 5,
    flex: 0.5,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    margin: 5,
    color: "red",
    fontFamily: "oswald",
  },

  top: {
    borderTopWidth: 2,
    fontWeight: "bold",
    color: "red",
    fontSize: 16,
    textAlign: "center",
    borderColor: "#0000ff",
    padding: 10,
  },
});
export default card;
