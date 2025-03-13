import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { setAssessmentData } from "./redux/actions/assessment";
function App() {
  const { assessmentData } = useSelector((state) => ({
    assessmentData: state.assessmentData.assessmentData,
  }));

  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{`${assessmentData}`}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(setAssessmentData("Hello World"));
          }
          }
        >
          <Text>Dispatch Action</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
export default function storeApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
