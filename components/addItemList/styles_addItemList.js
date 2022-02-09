import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container_input_button: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
  },

  input: {
    color: "black",
    padding: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    width: "50%",
  },

  button_list: {
    borderRadius: 10,
    width: "30%",
    backgroundColor: "white",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 2,
  },

  text_button_list: {
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
    padding: 10,
  },
});

export default styles;
