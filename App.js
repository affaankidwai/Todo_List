import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "./screens/TodoList";
import AddTodo from "./screens/AddTodo";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="TodoList" component={TodoList} />
        <AppStack.Screen name="AddTodo" component={AddTodo} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
