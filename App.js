import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [InputText, setInputText] = useState("");
  const [ItemsList, setItemsList] = useState([]);
  const [ItemSelect, setItemSelect] = useState({});
  const [Visiviliti, setVisiviliti] = useState(false);

  const TextController = (text) => {
    setInputText(text);
  };

  const TextButtonInputList = () => {
    setInputText("");
    setItemsList([
      ...ItemsList,
      { value: InputText, id: Math.random().toString() },
    ]);
  };

  const ItemtDelete = (item) => {
    setVisiviliti(true);
    setItemSelect(item);
  };

  const confirmDelete = () => {
    const { id } = ItemSelect;
    setItemsList(ItemsList.filter((item) => item.id !== id));
    setVisiviliti(false);
    setItemSelect({});
  };

  const NoconfirmDelete = () => {
    setVisiviliti(false);
  };

  return (
    <View style={styles.container}>
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

      <FlatList
        style={styles.container_items_list}
        data={ItemsList}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.items_list}>
              <Text style={styles.name_item}>{item.value}</Text>
              <TouchableOpacity
                style={styles.button_delete_items}
                onPress={() => ItemtDelete(item)}
              >
                <Text style={styles.text_button_delete_items}>Borrar</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <Modal
        style={styles.container_modal}
        animationType="slide"
        visible={Visiviliti}
      >
        <View style={styles.container_modal_view}>
          <Text style={styles.text_modal}>
            ¿Esta seguro que desea eliminar?
          </Text>
          <Text style={styles.text_modal_item}>{ItemSelect.value}</Text>
        </View>
        <View style={styles.view_button_modal}>
          <TouchableOpacity
            style={styles.button_modal_yes}
            onPress={confirmDelete}
          >
            <Text style={styles.text_button_modal}>SI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_modal_no}
            onPress={NoconfirmDelete}
          >
            <Text style={styles.text_button_modal}>NO</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    margin: 20,
  },

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

  container_items_list: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 40,
  },

  items_list: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 15,
    marginTop: 5,
  },

  name_item: {
    fontWeight: "bold",
    fontSize: 16,
    width: "40%",
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "white",
  },

  button_delete_items: {
    borderRadius: 10,
    width: "30%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },

  text_button_delete_items: {
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
    padding: 10,
  },
  text_modal: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },

  text_modal_item: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "red",
  },

  view_button_modal: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-around",
    margin: 20,
  },

  button_modal_yes: {
    borderRadius: 10,
    backgroundColor: "#32cd32",
    padding: 20,
    borderColor: "green",
    borderWidth: 2,
  },

  button_modal_no: {
    borderRadius: 10,
    backgroundColor: "#ff0000",
    padding: 20,
    borderColor: "red",
    borderWidth: 2,
  },

  text_button_modal: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
