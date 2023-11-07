// import React ,{useState, useEffect}from 'react';
// import {StyleSheet, Text, View,Modal} from 'react-native';
// import {COLORS} from '../../constants';


// const Profile = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   return (
//     <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: COLORS.bgColor,
//     }}>
//     <Text>Profile</Text>
//     </View>
//     );
// };  
// export default Profile;













// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, StyleSheet, TextInput, Button, ScrollView,Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Profile = ({ route }) => {
//   const { name } = route.params;
//   // const navigation = useNavigation();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [email, setemail] = useState('');
//   const [status, setStatus] = useState('');
//   const [degree, setdegree] = useState('');
//   const [classt, setclass] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState();

//   useEffect(() => {
//     fetchTeacherDetails(name); // Fetch student details when component mounts
//   }, [ ]);

//   const fetchTeacherDetails = async (name) => {
//     try {
//       const response = await fetch(
//         `http://localhost/CI3/index.php/admin/Apicontroller/getTeachers${name}`
//       );
//       const data = await response.json();
//       console.log('Fetched data:', data);
//       const tbl_teacher = data.find((tbl_teacher) => tbl_teacher.name === name);
//       if (tbl_teacher) {
//         setName(tbl_teacher.name);
//         setEmail(tbl_teacher.email);
//         setStatus(tbl_teacher.status);
//         setdegree(tbl_teacher.address);
//         setclass(tbl_teacher.classt);
//         setPhoto(tbl_teacher.photo);
//         setPassword(tbl_teacher.password);
//         setSelectedStudent(tbl_teacher);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Teacher Details</Text>
//       <Text style={styles.name}>Name: {name}</Text>

//       {selectedStudent && (
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             placeholderTextColor="black"
//             value={name}
//             onChangeText={setName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="black"
//             value={email}
//             onChangeText={setemail}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="status"
//             placeholderTextColor="black"
//             value={status}
//             onChangeText={setStatus}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Degree"
//             placeholderTextColor="black"
//             value={degree}
//             onChangeText={setdegree}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Photo"
//             placeholderTextColor="black"
//             value={photo}
//             onChangeText={setPhoto}
//           />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//     textAlign: 'center',
//   },
//   name: {
//     fontSize: 23,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'black',
//     textAlign: 'center',
//   },
//   inputContainer: {
//     backgroundColor: '#f7f7f7',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//     color: 'black',
//   },
//   input: {
//     marginBottom: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     color: 'black',
//   },
// });

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, StyleSheet, TextInput, Button } from 'react-native';

// const Student_Details = ({ route }) => {
//   const { rollNo } = route.params;
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [className, setClassName] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [dob, setDob] = useState('');
//   const [address, setAddress] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);
  

//   const handleSubmit = () => {
//     // Perform form submission logic here
//     console.log('Form submitted!');
//   };

//   const handleCancel = () => {
//     // Reset form fields here
//     setClassName('');
//     setName('');
//     setMobile('');
//     setDob('');
//     setAddress('');
//     setPhoto('');
//     setGender('');
//     setPassword('');
//   };

//   useEffect(() => {
//     fetchStudentDetails(rollNo); // Pass the rollNo parameter to the function
//   }, []);

//   const fetchStudentDetails = async (rollNo) => {
//     try {
//       const response = await fetch(
//         `https://demo.vmmhs.org/admin/ApiController/getStudents/${rollNo}`
//       );
//       const data = await response.json();

//       // Update the state with the fetched data
//       setClassName(data.className);
//       setName(data.name);
//       setMobile(data.mobile);
//       setDob(data.dob);
//       setAddress(data.address);
//       setPhoto(data.photo);
//       setGender(data.gender);
//       setPassword(data.password);

//       setSelectedStudent(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Details</Text>
//       <Text style={styles.rollNo}>Roll No: {rollNo}</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Class Name"
//           value={className}
//           onChangeText={setClassName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile"
//           value={mobile}
//           onChangeText={setMobile}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Date of Birth"
//           value={dob}
//           onChangeText={setDob}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Address"
//           value={address}
//           onChangeText={setAddress}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Photo"
//           value={photo}
//           onChangeText={setPhoto}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Gender"
//           value={gender}
//           onChangeText={setGender}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button style={styles.button} title="SUBMIT" onPress={handleSubmit} />
//         <Button style={styles.button} title="CANCEL" onPress={handleCancel} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   rollNo: {
//     marginBottom: 20,
//   },
//   inputContainer: {
//     backgroundColor: '#f7f7f7',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     width: '40%',
//   },
// });

// export default Student_Details;



// import React, { useState, useEffect } from 'react';
// import { View, Text, Modal, StyleSheet, TextInput, Button } from 'react-native';

// const Student_Details = ({ route }) => {
//   const { rollNo } = route.params;
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [className, setClassName] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [dob, setDob] = useState('');
//   const [address, setAddress] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleSubmit = () => {
//     // Perform form submission logic here
//     console.log('Form submitted!');
//   };

//   const handleCancel = () => {
//     // Reset form fields here
//     setClassName('');
//     setName('');
//     setMobile('');
//     setDob('');
//     setAddress('');
//     setPhoto('');
//     setGender('');
//     setPassword('');
//   };

//   useEffect(() => {
//     fetchStudentDetails();
//   }, []);

//   const fetchStudentDetails = async (rollNo) => {
//     try {
//       const response = await fetch(
//         `https://demo.vmmhs.org/admin/ApiController/getStudents/${rollNo}`
//       );
//       const data = await response.json();
//       setSelectedStudent(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Details</Text>
//       <Text style={styles.rollNo}>Roll No: {rollNo}</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Class Name"
//           value={className}
//           onChangeText={setClassName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile"
//           value={mobile}
//           onChangeText={setMobile}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Date of Birth"
//           value={dob}
//           onChangeText={setDob}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Address"
//           value={address}
//           onChangeText={setAddress}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Photo"
//           value={photo}
//           onChangeText={setPhoto}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Gender"
//           value={gender}
//           onChangeText={setGender}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button style={styles.button} title="SUBMIT" onPress={handleSubmit} />
//         <Button style={styles.button} title="CANCEL" onPress={handleCancel} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   rollNo: {
//     marginBottom: 20,
//   },
//   inputContainer: {
//     backgroundColor: '#f7f7f7',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     width: '40%',
//   },
// });

// export default Student_Details;



























// import React, { useState } from 'react';
// import { View,Text, TextInput, Button, StyleSheet } from 'react-native';

// const FormExample = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [degree, setDegree] = useState('');
//   const [classt, setClasst] = useState('');
//   const [photo, setPhoto] = useState('');

//   const handleSubmit = () => {
//     // Perform your form submission logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Degree:', degree);
//     console.log('Classt:', classt);
//     console.log('Photo:', photo);
//   };

//   return (
    
//     <View style={styles.container}>
//        <Text style={styles.title}>Class Teacher Details</Text>
//       <TextInput
//         placeholder="Name"
//         placeholderTextColor="black"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />

//       <TextInput
//         placeholder="Email"
//         placeholderTextColor="black"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//       />
//       <TextInput
//         placeholder="Degree"
//         placeholderTextColor="black"
//         value={degree}
//         onChangeText={setDegree}
//         style={styles.input}
        
//       />
//       <TextInput
//         placeholder="Classt"
//         placeholderTextColor="black"
//         value={classt}
//         onChangeText={setClasst}
//         style={styles.input}
       
//       />
//       <TextInput
//         placeholder="Photo"
//         placeholderTextColor="black"
//         value={photo}
//         onChangeText={setPhoto}
//         style={styles.input}
       
//       />

//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color:'black',
//   },
//   input: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//   },
// });

// export default FormExample;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const FormExample = () => {
//   const [teacherId, setTeacherId] = useState('');
//   const [teacherData, setTeacherData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const fetchTeacherData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost/CI3/index.php/admin/Apicontroller/getTeachers/${teacherId}`);
//       const data = await response.json();
//       setTeacherData(data);
//     } catch (error) {
//       console.error('Error fetching teacher data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (teacherId) {
//       fetchTeacherData();
//     }
//   }, [teacherId]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Class Teacher Details</Text>
//       <TextInput
//         placeholder="Teacher ID"
//         placeholderTextColor="black"
//         value={teacherId}
//         onChangeText={setTeacherId}
//         style={styles.input}
//         keyboardType="numeric"
//       />

//       <TextInput
//         placeholder="Name"
//         placeholderTextColor="black"
//         value={teacherData.name || ''}
//         style={styles.input}
//         editable={false}
//       />

//       <TextInput
//         placeholder="Email"
//         placeholderTextColor="black"
//         value={teacherData.email || ''}
//         style={styles.input}
//         editable={false}
//       />

//       <TextInput
//         placeholder="Degree"
//         placeholderTextColor="black"
//         value={teacherData.degree || ''}
//         style={styles.input}
//         editable={false}
//       />

//       <TextInput
//         placeholder="Classt"
//         placeholderTextColor="black"
//         value={teacherData.classt || ''}
//         style={styles.input}
//         editable={false}
//       />

//       <TextInput
//         placeholder="Photo"
//         placeholderTextColor="black"
//         value={teacherData.photo || ''}
//         style={styles.input}
//         editable={false}
//       />

//       <Button title="Fetch Teacher" onPress={fetchTeacherData} disabled={loading} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   input: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//   },
// });

// export default FormExample;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const FormExample = () => {
//   const [teacherId, setTeacherId] = useState('');
//   const [teacherData, setTeacherData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const fetchTeacherData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost/CI3/index.php/admin/Apicontroller/getTeachers/${teacherId}`);
//       const data = await response.json();
//       setTeacherData(data);
//     } catch (error) {
//       console.error('Error fetching teacher data:', error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     const getStoredTeacherId = async () => {
//       try {
//         const storedTeacherId = await AsyncStorage.getItem('id');
//         if (storedTeacherId) {
//           setTeacherId(storedTeacherId);
//         }
//       } catch (error) {
//         console.error('Error retrieving stored teacher ID:', error);
//       }
//     };

//     getStoredTeacherId();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Class Teacher Details</Text>
//       <TextInput
//         placeholder="Teacher ID"
//         placeholderTextColor="black"
//         value={teacherId}
//         onChangeText={setTeacherId}
//         style={styles.input}
//         keyboardType="numeric"
//       />

//       <TextInput
//         placeholder="Name"
//         placeholderTextColor="black"
//         value={teacherData.name || ''}
//         style={styles.input}
//         editable={false}
//       />

//       {/* Other TextInput fields for Email, Degree, Classt, Photo */}
      
//       <Button title="Fetch Teacher" onPress={fetchTeacherData} disabled={loading} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   input: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//   },
// });

// export default FormExample;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormExample = () => {
  const [teacherId, setTeacherId] = useState(null);
  const [teacherDetails, setTeacherDetails] = useState(null);

  useEffect(() => {
    // Fetch teacher ID from AsyncStorage and update state
    AsyncStorage.getItem('id').then(id => {
      if (id) {
        setTeacherId(id);
        fetchTeacherDetails(id); // Fetch teacher details when ID is available
      }
    });
  }, []);

  const fetchTeacherDetails = async id => {
    try {
      const response = await fetch(`http://localhost/CI3/index.php/admin/Apicontroller/getTeachers/${id}`);
      const data = await response.json();
      console.log("data", JSON.stringify(data));
      setTeacherDetails(data);
    } catch (error) {
      console.error('Error fetching teacher details:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Teacher Details</Text>
      {teacherDetails ? (
        <>
          <Text>Name: {teacherDetails.name}</Text>
          <Text>Status: {teacherDetails.status}</Text>
          <Text>Email: {teacherDetails.email}</Text>
          <Text>Degree: {teacherDetails.degree}</Text>
          <Text>Class: {teacherDetails.classt}</Text>
          {/* You might need to handle the photo display differently */}
          <Text>Photo: {teacherDetails.photo}</Text>
        </>
      ) : (
        <Text>Loading teacher details...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
});

export default FormExample;
