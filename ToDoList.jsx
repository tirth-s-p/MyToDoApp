import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => (
  <ScrollView style={styles.scrollView}>
    {tasks.map((task, index) => (
      <Text key={index} style={styles.task}>{task}</Text>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  task: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd'
  }
});

export default ToDoList;
