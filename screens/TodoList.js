import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import axios from "axios";
// import Icon1 from "../assets/Icon-color.svg";
// import Icon2 from "../assets/add.svg";
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
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const dateObj = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDay(dateObj.toLocaleDateString("en-US", options).split(",")[0]);
    setCurrentDate(dateObj.toLocaleDateString("en-US", options).split(",")[1]);
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.dp} source={require("../assets/DP.png")} />
      <TouchableOpacity
        style={styles.img1}
        onPress={() => console.log("Button 1 pressed")}
      >
        <Image source={require("../assets/Icon-color.png")} />
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => console.log("Button 2 pressed")}>
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path fill="#FFF" d={Icon2} />
        </Svg>
      </TouchableOpacity> */}
      <Text style={styles.mainText}>Good Morning</Text>
      <View>
        <View style={styles.leftUnder}>
          <Text style={styles.todayText}> Today's {currentDay}</Text>
          <Text style={styles.dateText}>{currentDate}, 2023</Text>
        </View>
      </View>
      <Text style={styles.upcoming}>Upcoming</Text>
      <View style={styles.upcomingBox}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoUpcoming}>
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
        <Text style={styles.completed}>Completed</Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoCompleted}>
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
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
      <Text>heuiufhao</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3840",
    alignItems: "flexStart",
    justifyContent: "flexStart",
  },
  img1: {
    width: 2,
    height: 2,
    position: "absolute",
    top: 70,
    right: 90,
  },
  dp: {
    width: 70,
    height: 70,
    position: "absolute",
    top: 60,
    left: 20,
  },
  mainText: {
    color: "#19A7CE",
    marginLeft: 15,
    marginTop: 180,
    fontSize: 80,
  },
  leftUnder: {
    margin: 20,
  },
  todayText: {
    color: "#DAF5FF",
  },
  dateText: {
    color: "#B9E9FC",
  },
  todoText: {
    color: "#F2E3DB",
  },
  button: {
    marginBottom: 20,
  },
  upcoming: {
    marginLeft: 20,
    color: "#BACDDB",
    fontWeight: "bold",
    fontSize: 30,
  },
  completed: {
    marginLeft: 10,
    color: "#BACDDB",
    fontWeight: "bold",
    fontSize: 30,
  },
  todoText: {
    padding: 2,
  },
  upcomingBox: {
    margin: 10,
    height: 400,
  },
  todoUpcoming: {
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    margin: 10,
    height: 140,
    width: 180,
  },
  todoCompleted: {
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    margin: 10,
    height: 140,
    width: 180,
  },
});
