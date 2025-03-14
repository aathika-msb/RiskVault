import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { scoreIndicatorStyles } from "./scoreIndicator.style";

interface TScoreIndicatorProps {
    score: number;
}

const ScoreIndicator = ({ score }: TScoreIndicatorProps):JSX.Element => {
    const animatedWidth = useRef(new Animated.Value(0)).current;
    const animatedColor = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      // Animate width change
      Animated.timing(animatedWidth, {
        toValue: (score / 100) * 250, // Max width is 250
        duration: 500,
        useNativeDriver: false,
      }).start();
  
      // Animate color change
      Animated.timing(animatedColor, {
        toValue: score, 
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, [score]);
  
    // Interpolate colors for Low, Medium, High scores
    const barColor = animatedColor.interpolate({
      inputRange: [0, 40, 70, 100],
      outputRange: ["#FF4D4D", "#FFC107", "#4CAF50", "#4CAF50"],
    });
  
    const animatedStyle = {
      width: animatedWidth,
      backgroundColor: barColor,
    };
  
    return (
      <View style={scoreIndicatorStyles.container}>
        <Text style={scoreIndicatorStyles.label}>Score: {score}</Text>
        <View style={scoreIndicatorStyles.barContainer}>
          <Animated.View style={[scoreIndicatorStyles.bar, animatedStyle]} />
        </View>
        <Text style={scoreIndicatorStyles.level}>
          {score < 40 ? "Low" : score < 70 ? "Medium" : "High"}
        </Text>
      </View>
    );
};
  
  export default ScoreIndicator;