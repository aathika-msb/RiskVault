import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../theme/color';
import Sizes from '../../theme/size';
import { moderateScale } from 'react-native-size-matters';

interface TDisplayAnswersStyle {
    container: ViewStyle;
    title: TextStyle;
    questionContainer: ViewStyle;
    questionText: TextStyle;
    answerText: TextStyle;
}

const displayAnswersStyle = StyleSheet.create<TDisplayAnswersStyle>({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.backgroundDark,
    },
    title: {
        fontSize: Sizes.title,
        fontWeight: '600',
        color: Colors.textPrimary,
        marginBottom: Sizes.largeMargin,
    },
    questionContainer: {
        marginBottom: Sizes.largeMargin,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    questionText: {
        fontSize: Sizes.mediumText,
        color: Colors.textSecondary,
        fontWeight: '500',
        marginBottom: moderateScale(4),
    },
    answerText: {
        fontSize: Sizes.regularText,
        color: Colors.textPrimary,
        fontWeight: '500',
    },
});

export default displayAnswersStyle;
