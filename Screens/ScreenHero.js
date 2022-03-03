import react from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function ScreenHero() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>
          La Plaga (El Azote en Warcraft III) es una de las facciones, junto a
          los Renegados y a los Caballeros de la Espada de Ébano, cuyos
          integrantes son mayoritariamente no-muertos. Su objetivo era controlar
          el mundo de Azeroth y someter a sus habitantes. Creada inicialmente
          como precursora de una invasión de la Legión Ardiente, la Plaga se
          liberó de sus maestros demoníacos y - bajo el firme mandato del
          terrorífico Rey Exánime - han construido su base en el continente
          helado de Rasganorte. Su influencia se extiende por todo Rasganorte,
          así como por las Tierras de la Peste al norte de Lordaeron y sur de
          Quel'Thalas, e incluso por Kalimdor en un menor grado. Un enemigo
          terrible e insidioso, antes de su derrota, fue quizás la amenaza más
          peligrosa para el mundo de Azeroth.
        </Text>

        <Text style={styles.text_tittle}>Creación</Text>

        <Text style={styles.text}>
          La Plaga fue (y sigue siendo) un vasto ejército de no-muertos creado
          por el Rey Exánime, cuando este respondía a la voluntad del chamán
          orco Ner'zhul. Sometido bajo el control de la Legión Ardiente, su
          misión era extender el terror y la destrucción a través del mundo para
          allanar el camino a la inminente invasión de la Legión. El Rey
          Exánime, que gobernaba desde los territorios helados de Rasganorte
          desde su Trono Helado, creó un terrible veneno llamado peste de los
          no-muertos. Cuando la peste arribó en las costas de Lordaeron, los
          humanos empezaron a caer bajo la influencia mental de Ner'zhul que
          drenaba sus vidas envenenándolos y aumentando la capacidad numérica de
          la Plaga a cada día que pasaba.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 20, fontWeight: "bold", margin: 10 },
  text_tittle: { fontSize: 23, fontWeight: "bold", margin: 10 },
  ScrollView: { margin: 10, backgroundColor: "#e0ebeb", borderRadius: 10 },
  container: { backgroundColor: "white" },
});

export default ScreenHero;
