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
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
} from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [deadline, setDeadline] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      text,
      completed,
      deadline,
    };

    if (description) {
      newTodo.description = description;
    }

    if (startDate) {
      newTodo.start_date = startDate;
    }

    if (category) {
      newTodo.category = category;
    }

    axios
      .post("http://localhost:4000/todos", newTodo)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={String(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description (optional)"
        onChangeText={(description) => setDescription(description)}
        value={String(description)}
      />
      <TextInput
        style={styles.input}
        placeholder="Start Date (optional)"
        onChangeText={(startDate) =>
          setStartDate(startDate ? new Date(startDate) : new Date())
        }
        value={startDate ? startDate.toString() : ""}
      />

      <TextInput
        style={styles.input}
        placeholder="Category (optional)"
        onChangeText={(category) => setCategory(category)}
        value={category}
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Completed:</Text>
        <Switch
          value={completed}
          onValueChange={(value) => setCompleted(value)}
        />
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
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Switch,
//   Button,
// } from "react-native";
// import { DatePicker } from "react-native-paper";
// import axios from "axios";

// export default function AddTodo() {
//   const [text, setText] = useState("");
//   const [description, setDescription] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [category, setCategory] = useState("");
//   const [completed, setCompleted] = useState(false);
//   const [deadline, setDeadline] = useState("");

//   const handleAddTodo = () => {
//     const newTodo = {
//       text,
//       description,
//       start_date: startDate,
//       category,
//       completed,
//       deadline,
//     };
//     axios
//       .post("http://localhost:4000/todos", newTodo)
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Todo"
//         onChangeText={(text) => setText(text)}
//         value={text}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Description (optional)"
//         onChangeText={(description) => setDescription(description)}
//         value={description}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Start Date (optional)"
//         onChangeText={(startDate) => setStartDate(startDate)}
//         value={startDate}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Category (optional)"
//         onChangeText={(category) => setCategory(category)}
//         value={category}
//       />

//       <View style={styles.checkboxContainer}>
//         <Text style={styles.label}>Completed:</Text>
//         <Switch
//           value={completed}
//           onValueChange={(value) => setCompleted(value)}
//         />
//       </View>

//       {/* <TextInput
//         style={styles.input}
//         placeholder="Deadline (optional, yyyy-mm-dd)"
//         onChangeText={(deadline) => setDeadline(deadline)}
//         value={deadline}
//       /> */}
//       <DatePicker
//         style={styles.datePicker}
//         label="Deadline"
//         mode="date"
//         value={deadline}
//         onChange={(date) => setDeadline(date)}
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
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   label: {
//     marginRight: 8,
//   },
//   datePicker: {
//     width: "80%",
//     marginTop: 10,
//   },
// });
