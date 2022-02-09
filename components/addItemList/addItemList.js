import react from "react";
import styles from "./styles_addItemList";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

function addItemList({ TextController, InputText, TextButtonInputList }) {
  return (
    <View style={styles.container_input_button}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un texto"
        onChangeText={TextController}
        value={InputText}
      />
      <TouchableOpacity
        style={styles.button_list}
        onPress={TextButtonInputList}
      >
        <Text style={styles.text_button_list}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default addItemList;
