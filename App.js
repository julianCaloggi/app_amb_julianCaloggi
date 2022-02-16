import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Computer from "./components/computer";
import Console from "./components/console";

export default function App() {
  const [changePage, setChangePage] = useState();

  const HandlerChangePage = (change) => {
    setChangePage(change);
  };

  let content = <Computer onChangePage={HandlerChangePage} />;

  if (changePage == true) {
    content = <Console />;
  }

  return <View>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 40,
  },
  container_cards: {
    flexDirection: "row",
  },

  button_consola: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0000ff",
    padding: 10,
  },

  text_button_consola: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});
