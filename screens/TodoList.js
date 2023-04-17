import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => {
        console.log(error);
        alert("Error retrieving todos");
      });
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Upcoming</Text>
      <View style={styles.box}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.text}</Text>
              <Text style={styles.todoText}>
                Com: {item.completed.toString()}
              </Text>
              {item.deadline && (
                <Text style={styles.todoText}>
                  {new Date(item.deadline).toLocaleDateString()}
                </Text>
              )}
            </View>
          )}
          keyExtractor={(item) => item._id}
          horizontal={true}
        />
      </View>
      <Button
        style={styles.button}
        title="Add Todo"
        onPress={() => navigation.navigate("AddTodo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flexStart",
    justifyContent: "center",
    marginTop: 40,
  },
  button: {
    marginBottom: 80,
  },
  todoText: {
    padding: 2,
  },
  box: {
    margin: 10,
  },
  todoItem: {
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    margin: 20,
    height: 130,
    width: 160,
  },
});
