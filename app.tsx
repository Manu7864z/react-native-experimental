import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import NewDeckScreen from "./screens/NewDeckScreen";
import DeckScreen from "./screens/DeckScreen";
import LearnScreen from "./screens/LearnScreen";
import { Deck } from "./types/deck";

export type RootStackParamList = {
  Home: undefined;
  NewDeck: undefined;
  Deck: { deckId: string };
  Learn: { deckId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewDeck" component={NewDeckScreen} />
        <Stack.Screen name="Deck" component={DeckScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
