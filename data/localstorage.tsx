import AsyncStorage from "@react-native-async-storage/async-storage";
import { Deck } from "../types/deck";

const STORAGE_KEY = "@MiniCoachDecks";

export const saveDecks = async (decks: Deck[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(decks);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error("Fehler beim Speichern:", e);
  }
};

export const loadDecks = async (): Promise<Deck[]> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value != null ? JSON.parse(value) : [];
  } catch (e) {
    console.error("Fehler beim Laden:", e);
    return [];
  }
};
