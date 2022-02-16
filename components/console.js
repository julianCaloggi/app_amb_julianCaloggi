import react from "react";
import { View } from "react-native";
import Card from "./card";
import styles from "./styles_computer_console";

const console = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_cards}>
        <Card
          name="Microsoft Xbox Series S"
          price="89.999"
          descr="512GB Standard color blanco"
        />
        <Card
          name="Consola Level Up Retroboy"
          price="3.000"
          descr="8GB color blanco"
        />
      </View>
      <View style={styles.container_cards}>
        <Card
          name="Consola Family Game"
          price="4.100"
          descr="Standard color blanco y rojo"
        />
        <Card
          name="Nintendo Switch OLED "
          price="94.000"
          descr="64GB Standard color rojo neón"
        />
      </View>
      <View style={styles.container_cards}>
        <Card
          name="Microsoft Xbox Series"
          price="174.000"
          descr="1TB Standard color negro"
        />
        <Card
          name="PlayStation 4 Slim"
          price="102.000"
          descr="1TB Standard color negro azabache"
        />
      </View>
    </View>
  );
};

export default console;
