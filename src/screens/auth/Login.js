import React, { useState,useEffect} from 'react';
import { View, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        const storedEmail = await AsyncStorage.getItem('email');
        navigation.navigate('Home'); // Replace 'Home' with your actual home route name
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      try {
        const response = await fetch('http://172.20.10.2:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Unexpected content type in response.');
        }
  
        const data = await response.json();
        console.log(data)
  
        if (data.message === 'Login successful') {
          await AsyncStorage.setItem('isLoggedIn', 'true');
          await AsyncStorage.setItem('email', email);
          navigation.navigate('Home'); // Replace 'Home' with your actual home route name
        } else {
          Alert.alert('Login Failed', 'Please enter valid login details');
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error...', 'An error occurred. Please try again later.');
      }
    } else {
      Alert.alert('Info...', 'Please enter both User ID and password.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.name}>MIND-FIT</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="User ID"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setemail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>Register/signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // height:150,
    // width:150,
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#9D2235',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#9D2235',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signup: {
    color: 'black',
    fontSize: 11,
  },
});

export default Login;