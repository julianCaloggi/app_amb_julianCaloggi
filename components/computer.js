import react from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Card from "./card";
import styles from "./styles_computer_console";

const computer = ({ onChangePage }) => {
  const trueChangePage = () => {
    onChangePage(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_cards}>
        <Card
          name="notebook Noblex"
          price="44.000"
          descr="Pantalla HD Intel Celeron 4GB/128GB SSD"
        />
        <Card
          name="Notebook Dell Inspiron 5502"
          price="121.000"
          descr="Core I5 12gb 256gb Win 10 Home"
        />
      </View>
      <View style={styles.container_cards}>
        <Card
          name="Notebook Hp Intel I5-1135g7"
          price="99.999"
          descr="8gb 256gb 15,6'' Fhd Win11 Home"
        />
        <Card
          name="notebook Positivo BGH A1650"
          price="81.999"
          descr="Intel Core i5 6200U 8GB de RAM 1TB HDD"
        />
      </View>
      <View style={styles.container_cards}>
        <Card
          name="notebook Pcbox Fire "
          price="37.999"
          descr="Intel Celeron N4000 4GB de RAM 64GB SSD"
        />
        <Card
          name="Notebook Dell Inspiron 3505"
          price="97.999"
          descr="AMD Ryzen 5 3450U 8GB de RAM 256GB SSD"
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button_consola}
          onPress={trueChangePage}
        >
          <Text style={styles.text_button_consola}>Consolas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default computer;
