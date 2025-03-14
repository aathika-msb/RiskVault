import { StyleSheet } from 'react-native';
import Colors from '../../theme/color';
import Sizes from '../../theme/size';

const questionsScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
  },
  title: {
    fontSize: Sizes.title,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Sizes.smallMargin,
  },
  questionContainer: {
    marginBottom: Sizes.regularMargin,
  },
  questionText: {
    fontSize: Sizes.regularText,
    color: Colors.textSecondary,
    fontWeight: 'semibold',
  },
  dropDownMainContainer: {
    padding: Sizes.smallPadding,
  },
  dropdown: {
    borderColor: Colors.inputBorder,
    borderWidth: 1.5,
    borderRadius: Sizes.smallRadius,
    backgroundColor: Colors.backgroundLight,
  },
  dropdownContainer: {
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.backgroundLight,
  },
  dropdownText: {
    fontSize: Sizes.regularText,
    color: Colors.textPrimary,
  },
  buttonContainerStyle: {
    marginVertical: Sizes.largeMargin,
  }
});

export default questionsScreenStyle;
