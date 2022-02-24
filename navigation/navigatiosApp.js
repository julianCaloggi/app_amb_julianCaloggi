import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "../screens/index";
import ButtonAntipanicScreen from "../screens/buttonAntipanic";
import CreditsScreen from "../screens/credits";
import SubsidiesScreen from "../screens/subsidies";

const Stack = createNativeStackNavigator();

function navigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
          }}
          name="Menu"
          component={IndexScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
          }}
          name="Boton Antipanico"
          component={ButtonAntipanicScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
          }}
          name="Solicitud de credito"
          component={CreditsScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
          }}
          name="Subsidio"
          component={SubsidiesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigationApp;
