import react from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Hero from "../Screens/ScreenHero";
import Units from "../Screens/ScreenBuilding";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="La plaga"
          component={Hero}
          options={{
            tabBarLabel: "La plaga",
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome5
                  name="book-dead"
                  size={24}
                  color={focused ? "blue" : "black"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="La legion ardiente"
          component={Units}
          options={{
            tabBarLabel: "La plaga",
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome5
                  name="ghost"
                  size={24}
                  color={focused ? "blue" : "black"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
