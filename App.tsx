import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { setAssessmentData } from "./redux/actions/assessment";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/homeScreen/homeScreen";
import QuestionsScreen from "./screens/questionsScreen/questionsScreen";
import ScoreDisplayScreen from "./screens/scoreDisplayScreen/scoreDisplayScreen";

const Stack = createStackNavigator();

export function storeApp() {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="ScoreDisplay" component={ScoreDisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default storeApp;
