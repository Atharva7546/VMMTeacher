// //GALLERY

// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Linking,
// } from 'react-native';
// import {COLORS, ROUTES} from '../../constants';
// const VisitWebsite = () => {
  

//   return (
//     <View style={styles.container}>
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.bgColor,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 50,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   contentContainer: {
//     alignItems: 'center',
//     width: '80%',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     /* your input field container styles here */
//   },
//   visitWebsiteButton: {
//     backgroundColor: '#9D2235',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 30,
//   },
//   visitWebsiteButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default VisitWebsite;



//  {/* <View style={styles.logoContainer}>
//         <Image source={require('../../assets/logovmm.png')} style={styles.logo} />
//       </View>
//       <View style={styles.contentContainer}>
        
//         <TouchableOpacity
//           style={styles.visitWebsiteButton}
//           onPress={handleVisitWebsite}>
//           <Text style={styles.visitWebsiteButtonText}>Visit Gallery</Text>
//         </TouchableOpacity>
//       </View> */}


//       // const handleVisitWebsite = () => {
//   //   Linking.openURL('https://demo.vmmhs.org/gallery');
//   // };




import React, { useState, useEffect } from
 
'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from
 
'react-native';
import { PieChart } from 'react-native-svg-charts';
import { COLORS, ROUTES } from '../../constants';

// Dummy API response with pie chart data
const fetchPieChartDataFromAPI = () => {
  // Simulating API call delay with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { key: 'A', value: 75, svg: { fill: '#9D2235' } },
        { key: 'B', value: 25, svg: { fill: '#FF6347' } },
      ]); // Dummy pie chart data
    }, 10000); // Simulated 1-second delay
  });
};

const PieChartComponent = ({ data }) => {
  return (
    <View style={styles.pieChartContainer}>
      <PieChart style={{ height: 200 }} data={data} />
      <Text style={styles.chartCenterText}>Pie Chart Data</Text>
    </View>
  );
};

const VisitWebsite = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    // Fetch pie chart data from API
    fetchPieChartDataFromAPI().then((response) => {
      setPieChartData(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Other content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Pie Chart</Text>
        {pieChartData.length > 0 && <PieChartComponent data={pieChartData} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Other styles remain the same

  logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
      },
  pieChartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  chartCenterText: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9D2235',
  },
});

export default VisitWebsite;
