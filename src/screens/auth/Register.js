import React, { useState, useEffect } from 'react';
import {View,Alert, Text, TextInput, TouchableOpacity, StyleSheet,Image} from 'react-native';

const Register = () => {

  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    //  navigation.navigate(ROUTES.HOME);
      if (username !== '' && password !== '') {
        try {
          const response = await fetch('https://demo.vmmhs.org/admin/ApiController/teacherLogin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
          });

          const data = await response.json();
        //console.log(data); // Log the response for debugging

        if (data.responseCode === 200) {
          // Login successful, store the user type in async storage
          await AsyncStorage.setItem('isLoggedIn', 'true');
          await AsyncStorage.setItem('teacherEmail',data.teacherEmail);
          await AsyncStorage.setItem('teacherName',data.teacherName);
          // await AsyncStorage.setItem('id',data.id);
          await AsyncStorage.setItem('className',data.className);
          await AsyncStorage.setItem('password',password);
          fetchTeacherDetails(data.teacherEmail);
          navigation.navigate(ROUTES.HOME);
        } else {
          // Login failed, display error message
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
          placeholder="Full Name"
          placeholderTextColor="#003f5c"
          onChangeText={text => setName(text)}
          value={Name}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Date of Birth"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
          // value={username}
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email ID"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
          // value={username}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    // height:150,
    // width:150,
    marginBottom:20,
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
