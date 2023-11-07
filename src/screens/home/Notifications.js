// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {COLORS} from '../../constants';

// const Notifications = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: COLORS.bgColor,
//       }}>
//       <Text>Notification!</Text>
//     </View>
//   );
// };

// export default Notifications;

// const styles = StyleSheet.create({});



import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';
import { firebase } from '@react-native-firebase/messaging';

const Notifications = () => {
  useEffect(() => {
    // Request permission for receiving notifications
    const requestUserPermission = async () => {
      const authStatus = await firebase.messaging().requestPermission();
      const enabled =
        authStatus === firebase.messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === firebase.messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    };

    requestUserPermission();

    // Handle incoming foreground notifications
    const messageListener = firebase.messaging().onMessage((remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // You can display the notification details in your UI or take any other action
    });

    // Clean up the listener when the component unmounts
    return () => {
      messageListener();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Notification Screen</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
