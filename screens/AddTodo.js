// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import axios from "axios";

// export default function AddTodo() {
//   const [text, setText] = useState("");

//   const handleAddTodo = () => {
//     axios
//       .post("http://localhost:4000/todos", { text })
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) => setText(text)}
//         value={text}
//       />

//       <Button title="Add Todo" onPress={handleAddTodo} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     margin: 10,
//     width: "80%",
//   },
// });
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import CheckBox from "@react-native-community/checkbox";
import axios from "axios";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);
  const [deadline, setDeadline] = useState("");

  const handleAddTodo = () => {
    axios
      .post("http://localhost:4000/todos", { text, completed, deadline })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Completed:</Text>
        <TextInput
          value={completed}
          onValueChange={(event) => setCompleted(event.target.checked)}
          //   style={styles.checkbox}
        />
        {/* <Input
          type="checkbox"
          value={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        /> */}
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(date) => setDeadline(date)}
        value={deadline}
        placeholder="Optional deadline (yyyy-mm-dd)"
      />

      <Button title="Add Todo" onPress={handleAddTodo} />
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "80%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    marginRight: 8,
  },
});
