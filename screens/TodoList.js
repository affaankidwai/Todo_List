import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:=4000/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
