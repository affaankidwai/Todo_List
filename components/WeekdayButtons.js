import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const WeekdayButtons = ({ selectedDay, onDaySelect }) => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [selectedButton, setSelectedButton] = useState(selectedDay);

  const handleDaySelect = (day) => {
    setSelectedButton(day);
    onDaySelect(day);
  };

  return (
    <View style={styles.container}>
      {weekdays.map((day) => (
        <TouchableOpacity
          key={day}
          style={[
            styles.button,
            selectedButton === day && styles.selectedButton,
          ]}
          onPress={() => handleDaySelect(day)}
        >
          <Text style={styles.text}>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0B2447",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: "#19A7CE",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default WeekdayButtons;
