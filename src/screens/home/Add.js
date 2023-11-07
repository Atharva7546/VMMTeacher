// //ADD STUDENT BUTTON FORM
// import React, { useState } from 'react';
// import { View, TextInput, Text, Modal, Button, StyleSheet, ScrollView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker'; // Import the date picker library
// import DocumentPicker from 'react-native-document-picker'; // Import the file picker library
// import { Picker } from '@react-native-picker/picker';

// const AddScreen = () => {
//   const navigation = useNavigation();
//   const [rollNo, setRollNo] = useState('');
//   const [className, setClassName] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [dob, setDob] = useState('');
//   const [address, setAddress] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [gender, setGender] = useState('');
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     setDob(date.toISOString()); // Save the selected date in ISO format
//     hideDatePicker();
//   };

//   const pickPhoto = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });
//       setPhoto(result.uri);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//       } else {
//         console.error(err);
//       }
//     }
//   };

//   const createStudent = async () => {
//     // Form submission logic
//     // ...
//     try {
//       // Send the form data to the API endpoint

//       const formData = new URLSearchParams();
//       formData.append('rollNo', rollNo);
//       formData.append('className', className);
//       formData.append('name', name);
//       formData.append('mobile', mobile);
//       formData.append('dob', dob);
//       formData.append('address', address);
//       formData.append('photo', photo);
//       formData.append('gender', gender);
//       const response = await fetch('https://demo.vmmhs.org/admin/ApiController/createStudent/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: formData.toString({
//           rollNo,
//           className,
//           name,
//           mobile,
//           dob,
//           address,
//           photo,
//           gender,
//         }),
//       });
//       console.log('Response:', response.status, response.statusText);
//       // Check the response status
//       if (response.ok) {
//         // Form submission successful
//         Alert.alert('Success', 'Student added successfully!');
//         // Reset form fields here
//         setRollNo('');
//         setClassName('');
//         setName('');
//         // setLoginId('');
//         setMobile('');
//         setDob('');
//         setAddress('');
//         setPhoto('');
//         setGender('');
//         // setPassword('');

//         // Go back to the previous screen
//         navigation.goBack();
//       } else {
//         // Form submission failed
//         Alert.alert('Error', 'Failed to add student. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert('Error', 'An error occurred. Please try again.');
//     }
//   };

//   const handleCancel = () => {
//     // Reset form fields here
//     setRollNo('');
//     setClassName('');
//     setName('');
//     // setLoginId('');
//     setMobile('');
//     setDob('');
//     setAddress('');
//     setPhoto('');
//     setGender('');
//     // setPassword('');

//     // Go back to the previous screen
//     navigation.goBack();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.modalTitle}>Add Student</Text>
//       <View style={styles.formContainer}>
//         <TextInput
//           placeholder="Roll No"
//           placeholderTextColor="black"
//           value={rollNo}
//           onChangeText={setRollNo}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Class Name"
//           placeholderTextColor="black"
//           value={className}
//           onChangeText={setClassName}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Name"
//           placeholderTextColor="black"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Mobile"
//           placeholderTextColor="black"
//           value={mobile}
//           onChangeText={setMobile}
//           style={styles.input}
//         />
//         <Button title="Select DOB" onPress={showDatePicker} />

//         <TextInput
//           placeholder="Address"
//           placeholderTextColor="black"
//           value={address}
//           onChangeText={setAddress}
//           style={styles.input}
//         />
//         <Picker
//           selectedValue={gender}
//           onValueChange={(itemValue) => setGender(itemValue)}
//           style={styles.input}
//         >
//           <Picker.Item label="Select Gender" value="" />
//           <Picker.Item label="Male" value="Male" />
//           <Picker.Item label="Female" value="Female" />
//         </Picker>

//         <Button title="Pick Photo" onPress={pickPhoto} />


//         <View style={styles.buttonContainer}>
//           <Button title="Submit" onPress={createStudent} color="#9D2235" />
//           <Button title="Cancel" onPress={handleCancel} color="red" />
//         </View>
//       </View>
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleDateConfirm}
//         onCancel={hideDatePicker}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'black',
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//   },
//   input: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     borderRadius: 5,
//     padding: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
// });

// export default AddScreen;

import React, { useState } from 'react';
import { View, TextInput, Text, Modal, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DocumentPicker from 'react-native-document-picker';
import { Picker } from '@react-native-picker/picker';

const AddScreen = () => {
  const navigation = useNavigation();
  const [rollNo, setRollNo] = useState('');
  const [className, setClassName] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');
  const [gender, setGender] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setDob(date.toISOString());
    hideDatePicker();
  };

  const pickPhoto = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setPhoto(result.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.error(err);
      }
    }
  };

  const createStudent = async () => {
    // Form submission logic
    // ...
    try {
      const formData = new URLSearchParams();
      formData.append('rollNo', rollNo);
      formData.append('className', className);
      formData.append('name', name);
      formData.append('mobile', mobile);
      formData.append('dob', dob);
      formData.append('address', address);
      formData.append('photo', {
      uri: photo,
      name: 'photo.jpg', // You can change the file name if needed
      type: 'image/jpeg', // Change the MIME type as per your photo type
    });
      formData.append('gender', gender);
      // Rest of the code remains the same...
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const handleCancel = () => {
    // Reset form fields here
    setRollNo('');
    setClassName('');
    setName('');
    setMobile('');
    setDob('');
    setAddress('');
    setPhoto('');
    setGender('');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.modalTitle}>Add Student</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Roll No"
          placeholderTextColor="#555"
          value={rollNo}
          onChangeText={setRollNo}
          style={styles.input}
        />
        <TextInput
          placeholder="Class Name"
          placeholderTextColor="#555"
          value={className}
          onChangeText={setClassName}
          style={styles.input}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#555"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Mobile"
          placeholderTextColor="#555"
          value={mobile}
          onChangeText={setMobile}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>Select DOB</Text>
         
        </TouchableOpacity>
        {/* <Text style={styles.selectedText}>DOB: {dob}</Text> */}


        <TextInput
          placeholder="Address"
          placeholderTextColor="#555"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.input}>

          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        


        <TouchableOpacity style={styles.button} onPress={pickPhoto}>
          <Text style={styles.buttonText}>Pick Photo</Text>
        </TouchableOpacity>
        {/* {photo ? <Image source={{ uri: photo }} style={styles.selectedImage} /> : null} */}


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={createStudent}>
            <Text style={styles.buttonTextWhite}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    color: '#333',
  },
  button: {
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#9D2235',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#9D2235',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  selectedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  selectedImage: {
    marginTop: 10,
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default AddScreen;

