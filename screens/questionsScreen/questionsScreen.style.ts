import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../theme/color';
import Sizes from '../../theme/size';

interface TQuestionsScreenStyle {
  container: ViewStyle;
  title: TextStyle;
  questionContainer: ViewStyle;
  questionText: TextStyle;
  buttonContainerStyle: ViewStyle;
}

const questionsScreenStyle = StyleSheet.create<TQuestionsScreenStyle>({
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
  buttonContainerStyle: {
    marginVertical: Sizes.largeMargin,
  }
});

export default questionsScreenStyle;
