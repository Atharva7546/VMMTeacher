// RecommendationItem.js

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecommendationItem = ({ item }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storedImageData = await AsyncStorage.getItem(`image_${item.id}`);
        setImageData(storedImageData);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
    fetchImage();
  }, [item.id]);

  return (
    <View style={styles.recommendationItem}>
      {imageData && (
        <Image
          source={{ uri: imageData }}
          style={styles.recommendationImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.recommendationDescription}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default RecommendationItem;
