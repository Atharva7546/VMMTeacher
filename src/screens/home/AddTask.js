import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'; // Assuming you're using a permissions library

const AddTask = () => {
  const [className, setClassName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [storagePermissionStatus, setStoragePermissionStatus] = useState(null); // Added state to track permission status

  useEffect(() => {
    const checkStoragePermission = async () => {
      const status = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE); // Adjust for your platform and permission
      setStoragePermissionStatus(status);
    };

    checkStoragePermission();
  }, []);


  const handleImagePicker = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
      },
      response => {
        if (!response.didCancel && !response.error) {
          setSelectedImage(response);
        }
      }
    );
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: 'image.jpg',
      });

      const response = await fetch(
        'http://localhost/CI3/index.php/admin/Apicontroller/upload_image',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        }
      );

      if (response.ok) {
        Alert.alert('Success', 'Image uploaded successfully');
      } else {
        Alert.alert('Error', 'Failed to upload image');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      Alert.alert('Error', 'Image upload failed');
      }
  };

  const handleSubmit = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('className', className);
      formData.append('taskDate', taskDate);
      formData.append('taskTime', taskTime);
      formData.append('taskTitle', taskTitle);
      formData.append('description', description);
      formData.append('file', selectedImage.uri);

      const response = await fetch(
        'https://demo.vmmhs.org/admin/ApiController/createTask',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );

      if (response.ok) {
        Alert.alert('Success', 'Task created successfully');
        // setIsModalVisible(false);
        fetchTasks();
      } else {
        Alert.alert('Error', 'Failed to create task');
      }
    } 
    catch (error) {
      console.error(error);
    }
    
    if (selectedImage) {
      formData.append('file', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: 'image.jpg',
      });
    }

    const response = await fetch(
      'http://localhost/CI3/index.php/admin/Apicontroller/upload_image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      }
    );

    if (response.ok) {
      Alert.alert('Success', 'Image uploaded successfully');
    } else {
      Alert.alert('Error', 'Failed to upload image');
    }

  };

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://demo.vmmhs.org/admin/ApiController/getTasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Class Name"
          placeholderTextColor="black"
          value={className}
          onChangeText={setClassName}
          style={styles.input}
        />
        <TextInput
          placeholder="Task Date"
          placeholderTextColor="black"
          value={taskDate}
          onChangeText={setTaskDate}
          style={styles.input}
        />
        <TextInput
          placeholder="Task Time"
          placeholderTextColor="black"
          value={taskTime}
          onChangeText={setTaskTime}
          style={styles.input}
        />
        <TextInput
          placeholder="Task Title"
          placeholderTextColor="black"
          value={taskTitle}
          onChangeText={setTaskTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Task Description"
          placeholderTextColor="black"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />

      <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        {selectedImage && (
          <View style={styles.selectedImageContainer}>
            <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
            <Text style={styles.selectedImageName}>{selectedImage.fileName}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Text>Upload Image</Text>
        </TouchableOpacity>
        <Button title="Submit Task" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default AddTask;


// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import ImagePicker from 'react-native-image-picker';
// import * as Permissions from 'react-native-permissions';

// import ImageCropPicker from 'react-native-image-crop-picker';

// const AddTask = () => {
//   const [className, setClassName] = useState('');
//   const [taskDate, setTaskDate] = useState('');
//   const [taskTime, setTaskTime] = useState('');
//   const [taskTitle, setTaskTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('className', className);
//       formData.append('taskDate', taskDate);
//       formData.append('taskTime', taskTime);
//       formData.append('taskTitle', taskTitle);
//       formData.append('description', description);
//       if (image) {
//         formData.append('image', {
//           uri: image.uri,
//           type: image.type,
//           name: 'image.jpg', // Change this according to your image name
//         });
//       }

//       const response = await fetch(
//         'https://demo.vmmhs.org/admin/ApiController/createTask',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         Alert.alert('Success', 'Task created successfully');
//         fetchTasks();
//       } else {
//         Alert.alert('Error', 'Failed to create task');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchTasks = async () => {
//     try {
//       const response = await fetch('https://demo.vmmhs.org/admin/ApiController/getTasks');
//       const data = await response.json();
//       setTasks(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleImageUpload = async () => {
//     try {
//       if (!file) {
//         Alert.alert('Error', 'Please select an image to upload');
//         return;
//       }
  
//       const response = await fetch(
//         'http://localhost/CI3/index.php/admin/Apicontroller/upload_image',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//           body: {
//             file: file,
//           },
//         }
//       );
  
//       if (response.ok) {
//         Alert.alert('Success', 'Image uploaded successfully');
//       } else {
//         Alert.alert('Error', 'Failed to upload image');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };
//   useEffect(() => {
//     requestPermissions();
//   }, []);
  
//   const requestPermissions = async () => {
//     try {
//       const permissionStatus = await Permissions.check('photo');

//       if (permissionStatus !== 'authorized') {
//         const newPermissionStatus = await Permissions.request('photo');
//         if (newPermissionStatus !== 'authorized') {
//           console.log('Permission denied.');
//         }
//       }
//     } catch (error) {
//       console.error('Error requesting permissions:', error);
//     }
//   };

//   const handleImagePicker = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false, // Change this based on your requirements
//     };

//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('Image picker cancelled.');
//       } else if (response.error) {
//         console.error('Image picker error:', response.error);
//       } else {
//         setSelectedImage(response.uri);
//       }
//     });
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Task</Text>
//       <View style={styles.formContainer}>
//         <TextInput
//           placeholder="Class Name"
//           placeholderTextColor="black"
//           value={className}
//           onChangeText={setClassName}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Task Date"
//           placeholderTextColor="black"
//           value={taskDate}
//           onChangeText={setTaskDate}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Task Time"
//           placeholderTextColor="black"
//           value={taskTime}
//           onChangeText={setTaskTime}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Task Title"
//           placeholderTextColor="black"
//           value={taskTitle}
//           onChangeText={setTaskTitle}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Task Description"
//           placeholderTextColor="black"
//           value={description}
//           onChangeText={setDescription}
//           style={styles.input}
//         />
//         <Button title="Select Image" onPress={handleImagePicker} />
//         {image && <Text style={styles.selectedFileName}>{image.filename || image.path}</Text>}

//         <View style={styles.buttonContainer}>
//           <Button title="Upload Image" onPress={handleImageUpload} color="#9D2235" />
//           <Button title="Submit" onPress={handleSubmit} color="#9D2235" />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   title: {
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
//     color: 'black',
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
//   selectedFileName: {
//     fontSize: 14,
//     color: 'gray',
//     marginBottom: 10,
//   },
// });

// export default AddTask;
