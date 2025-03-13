import React, { useState } from "react";
import { View, Text } from "react-native";
import AppContainer from "../../components/appContainer/appContainer";
import AppButton from "../../components/appButton/appButton";
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./questionsScreen.style";

const questions = [
  {
    question: "What is your favorite color?",
    options: [
      {
        label: "Red",
        value: 1,
      },
      {
        label: "Green",
        value: 2,
      },
      {
        label: "Blue",
        value: 3,
      }
    ],
  },
  {
    question: "What is your favorite animal?",
    options: [
      {
        label: "Dog",
        value: 1,
      },
      {
        label: "Cat",
        value: 2,
      },
      {
        label: "Elephant",
        value: 3,
      }
    ],
  },
  {
    question: "What is your favorite food?",
    options: [
      {
        label: "Pizza",
        value: 1,
      },
      {
        label: "Burger",
        value: 2,
      },
      {
        label: "Pasta",
        value: 3,
      }
    ],
  },
];



const QuestionsScreen = (props) => {
  const { navigation } = props;
  const [selectedValue, setSelectedValue] = useState([]);

  const Dropdown = (options,index) => {
    const [open, setOpen] = useState(false);
    console.log("🚀 -------------------------------------------------963 ~ Dropdown ~ open:", open)
    const [value, setValue] = useState(null);
  
      // Function to get the selected label
      const getSelectedLabel = () => {
        const selectedItem = options.find(item => item.value === value);
        return selectedItem ? selectedItem.label : 'None';
      };
  
    return (
      <View style={{... styles.dropDownMainContainer , zIndex: open ? 2 : 1}}>
        <DropDownPicker
          open={open}
          value={value}
          items={options}
          setOpen={setOpen}
          setValue={setValue}
          placeholder="Select an option"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          onChangeValue={(selectedItem) => {
            const value = {
              id: index,
              label: getSelectedLabel(),
              value: selectedItem,
            }
            console.log('Selected Value:', selectedItem);
            console.log('Selected Label:', getSelectedLabel());
            setSelectedValue([...selectedValue, value]);
          }}
          zIndex={3000 - index * 1000} // Ensure dropdowns are properly stacked
          zIndexInverse={1000 + index * 1000}
        />
      </View>
    );
  };
  
  const RenderQuestions = (questionDetails,index) => {
  const { question, options } = questionDetails;
    return (
      <View>
        <Text>{question}</Text>
        {Dropdown(options,index)}
      </View>
    );
  };
  const onSubmit = () => {
    console.log("Selected Values:", selectedValue);
  }
  return (
    <AppContainer>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Answer the below questions
      </Text>
      {questions.map((question,index) => RenderQuestions(question,index))}
      <AppButton
        title="Submit"
        onPress={() => onSubmit()}
      />
    </AppContainer>
  );
};

export default QuestionsScreen;
