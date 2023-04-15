import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const [text, setText] = useState('');
const handleAddTodo = () => {
    axios.post('http://localhost:4000/todos', { text })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };
