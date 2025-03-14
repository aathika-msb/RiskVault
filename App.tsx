
import { Provider} from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/homeScreen/homeScreen";
import QuestionsScreen from "./screens/questionsScreen/questionsScreen";
import ScoreDisplayScreen from "./screens/scoreDisplayScreen/scoreDisplayScreen";
import DisplayAnswerScreen from "./screens/displayAnswers/displayAnswers";

const Stack = createStackNavigator();

export function storeApp() {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
          <Stack.Screen name="ScoreDisplay" component={ScoreDisplayScreen} />
          <Stack.Screen name="DisplayAnswer" component={DisplayAnswerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default storeApp;
