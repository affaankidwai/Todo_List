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
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import WeekdayButtons from "../components/WeekdayButtons";

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

  var x = 75;
  const [selectedDay, setSelectedDay] = useState(null);
  const getTimeLeft = (deadline) => {
    const now = new Date();
    const timeLeft = new Date(deadline) - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);

    if (timeLeft < 0) {
      return "Deadline has passed";
    }

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ${hours} hr${
        hours > 1 ? "s" : ""
      } ${minutes} min left`;
    } else {
      return `${hours} hr${hours > 1 ? "s" : ""} ${minutes} min left`;
    }
  };
  const [deadline, setDeadline] = useState("2023-04-30T10:00:00.000Z");

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    console.log("Button 2 pressed");
    // perform the action for the selected day
  };

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

      <Text style={styles.mainText}>Good Morning</Text>
      <View style={styles.above}>
        <View style={styles.leftUnder}>
          <Text style={styles.todayText}> Today's {currentDay}</Text>
          <Text style={styles.dateText}>{currentDate}, 2023</Text>
        </View>
        <View style={styles.rightUnder}>
          {/* <Text style={styles.xText}>{x}</Text> */}
        </View>
      </View>
      <WeekdayButtons selectedDay={selectedDay} onDaySelect={handleDaySelect} />

      <Text style={styles.upcoming}>Upcoming</Text>
      <View style={styles.upcomingBox}>
        <Text>{getTimeLeft(deadline)}</Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoUpcoming}>
              <Text style={styles.todoText}>{item.category.toString()}</Text>
              <Text style={styles.todoText}>{item.text}</Text>
              {item.deadline && (
                <Text style={styles.todoText}>
                  {new Date(item.deadline).toLocaleDateString()}
                </Text>
              )}
            </View>
          )}
          keyExtractor={(item) => item._id}
          horizontal={false}
        />
      </View>
      <Button
        style={styles.button}
        title="Add Todo"
        onPress={() => navigation.navigate("AddTodo")}
      />
      <TouchableOpacity
        style={styles.img2}
        onPress={() => console.log("Button 3 pressed")}
      >
        <Image source={require("../assets/add.png")} />
      </TouchableOpacity>
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
    backgroundColor: "#0B2447",
    alignItems: "flexStart",
    justifyContent: "flexStart",
  },
  img1: {
    position: "absolute",
    top: 70,
    right: 40,
  },
  img2: {
    position: "absolute",
    bottom: 20,
    right: "42%",
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
  above: {},
  leftUnder: {
    margin: 20,
  },
  todayText: {
    color: "#DAF5FF",
  },
  dateText: {
    color: "#B9E9FC",
  },
  rightUnder: {},
  xText: {
    color: "#F2E3DB",
    textAlign: "right",
    marginRight: 20,
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
    width: "95%",
  },
  todoUpcoming: {
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    margin: 2,
    height: 140,
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
