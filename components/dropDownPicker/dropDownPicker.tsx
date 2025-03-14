import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./dropDownPicker.style";
import { TOptions } from "../../Constants/ConstantValue";

interface DropdownProps {
  questionId: number;
  options: Array<{ label: string; value: number }>;
  index: number;
  onChangeValue: (options:TOptions[], questionId: number, value: number | null) => void; // Accept onChangeValue as prop
}

const Dropdown = ({
  questionId,
  options,
  index,
  onChangeValue,
}: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number | null>(null);

  return (
    <View style={{ ...styles.dropDownMainContainer, zIndex: open ? 2 : 1 }}>
      <DropDownPicker
        open={open}
        value={value}
        items={options}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select an option"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.dropdownText}
        onChangeValue={(val) => {
          onChangeValue(options, questionId, val);
        }}
        zIndex={3000 - index * 1000} // Ensure dropdowns are properly stacked
        zIndexInverse={1000 + index * 1000}
      />
    </View>
  );
};

export default Dropdown;
