import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TasksScreen = () => {
  const navigation = useNavigation();

  const dummyTests = [
    {
      title: 'Test 1',
      date: '2023-11-11',
      time: '10:00 AM',
    },
    {
      title: 'Test 2',
      date: '2023-11-12',
      time: '02:30 PM',
    },
    {
      title: 'Test 3',
      date: '2023-11-13',
      time: '09:45 AM',
    },
    {
      title: 'Test 4',
      date: '2023-11-14',
      time: '01:15 PM',
    },
    {
      title: 'Test 5',
      date: '2023-11-15',
      time: '04:00 PM',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {dummyTests.map((test, index) => (
        <TouchableOpacity
          key={index}
          style={styles.testContainer}
          onPress={() => navigation.navigate('TestResult', { test })}
        >
          <Text style={styles.title}>{test.title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>{`Date: ${test.date}`}</Text>
            <Text style={styles.detailText}>{`Time: ${test.time}`}</Text>
          </View>
          <TouchableOpacity
            style={styles.viewResultButton}
            onPress={() => navigation.navigate('TestResult', { test })}
          >
            <Text style={styles.viewResultButtonText}>View Result</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  testContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#555555',
  },
  viewResultButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    marginTop: 8,
  },
  viewResultButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default TasksScreen;





  {/* <TouchableOpacity style={styles.addButton} onPress={navigateToAddScreen}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Tasks</Text>

      <ScrollView style={styles.taskList}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <Text style={styles.taskTitle}>{task.taskTitle}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
            <Text style={styles.taskInfo}>{task.className}</Text>
            <Text style={styles.taskInfo}>{task.taskDate}</Text>
            <Text style={styles.taskInfo}>{task.taskTime}</Text>
          </View>
        ))}
      </ScrollView> */}