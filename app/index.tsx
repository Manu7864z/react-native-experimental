import { Button, Text, View } from "react-native";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

interface Task {
  id: string;
  text: string;
}

export default function Index() {
  const [task, setTask] = useState<string>(""); //speichert die aktuelle Eingabe
  const [tasks, setTasks] = useState<Task[]>([]); //speichert die aktuelle Liste

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask(""); // Eingabefeld leeren
    }
  };

  // Aufgabe löschen
  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 To-Do Liste</Text>

      {/* Eingabefeld für neue Aufgaben */}
      <TextInput
        style={styles.input}
        placeholder="Neue Aufgabe..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Hinzufügen" onPress={addTask} />

      {/* Liste der Aufgaben */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// 📌 Styles für das Layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    marginTop: 5,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    color: "red",
    fontSize: 18,
  },
});
