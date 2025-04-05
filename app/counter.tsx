import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <TouchableOpacity style={styles.increaseButton} onPress={increase}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.decreaseButton} onPress={decrease}>
        <Text style={styles.buttonText}>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>Count: {count}</Text>
      <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Hintergrundfarbe des gesamten Containers
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333", // Textfarbe des Titels
  },
  increaseButton: {
    backgroundColor: "#4CAF50", // Hintergrundfarbe für "Increase"
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  decreaseButton: {
    backgroundColor: "#FF5722", // Hintergrundfarbe für "Decrease"
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white", // Textfarbe für die Buttons
    fontSize: 16,
  },
  countText: {
    fontSize: 18,
    marginVertical: 20,
    color: "#000", // Textfarbe für den Zähler
  },
  resetButton: {
    backgroundColor: "#2196F3", // Hintergrundfarbe für "Reset"
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: "white", // Textfarbe für "Reset"
    fontSize: 16,
  },
});
