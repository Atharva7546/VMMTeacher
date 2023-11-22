import React, { useState,useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, View } from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const Settings = ({ navigation }) => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profilePic: require('../../assets/user.jpg'),
  });

  useEffect(() => {
    async function getUserData() {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        if (savedEmail) {
          const response = await fetch(`http://192.168.1.8:5000/getdetails?email=${savedEmail}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setUserData({
              name: data.name || '',
              email: data.email || '',
              profilePic: require('../../assets/user.jpg'), // Replace with actual profile pic data if available
            });
          }
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    }

    getUserData();
  }, []);
  const handleDeleteAccount = () => {
    
  };

  const handleLogout =  async() => {
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('teacherEmail');
      await AsyncStorage.removeItem('className');
      await AsyncStorage.removeItem('password');
      navigation.navigate(ROUTES.LOGIN); // Replace 'Login' with the actual name of your login screen component
    };

  return (
    <LinearGradient
      colors={['#6441A5', '#2a0845']} // Example gradient colors
      style={styles.gradientContainer}
    >
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={userData.profilePic} style={styles.profilePic} />

        <Text style={styles.userInfo}>Name: {userData.name}</Text>
        <Text style={styles.userInfo}>Email: {userData.email}</Text>

        <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    marginVertical: 10,
    borderRadius: 5,
    width: 180,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userInfo: {
    marginVertical: 5,
    fontSize: 16,
  },
  gradientContainer: {
    flex: 1,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
});
