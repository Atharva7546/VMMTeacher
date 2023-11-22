import React from 'react';
import { View, ScrollView } from 'react-native';
// import YouTube from 'react-native-youtube';


const App = () => {
  
{/* <YouTube
  apiKey="YOUR_YOUTUBE_API_KEY"
  videoId="VIDEO_ID"
  style={styles.video}
/> */}
  return (
    <ScrollView style={styles.container}>
      {/* Dummy YouTube videos */} 
      {/* <View style={styles.videoContainer}>
        <YouTube videoId="VIDEO_ID_1" style={styles.video} />
      </View>
      <View style={styles.videoContainer}>
        <YouTube videoId="VIDEO_ID_2" style={styles.video} />
      </View>
      <View style={styles.videoContainer}>
        <YouTube videoId="VIDEO_ID_3" style={styles.video} />
      </View> */}
      {/* {/* Add more videos as needed */}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    alignSelf: 'stretch',
    height: 200, // Set your desired height for the video player
  },
};

export default App;
