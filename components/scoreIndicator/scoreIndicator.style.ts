import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Sizes from "../../theme/size";
import Colors from "../../theme/color";

interface TScoreIndicatorStyles {
    container: ViewStyle;
    label: TextStyle;
    barContainer: ViewStyle;
    bar: ViewStyle;
    level: TextStyle;
}

export const scoreIndicatorStyles = StyleSheet.create<TScoreIndicatorStyles>({
    container: {
        alignItems: "center",
        marginTop: Sizes.largeMargin,
    },
    label: {
        fontSize: Sizes.largeText,
        fontWeight: '600',
        marginBottom: Sizes.smallMargin,
        color: Colors.textSecondary,
    },
    barContainer: {
        width: 250,
        height: 20,
        backgroundColor: Colors.shadow,
        borderRadius: Sizes.mediumRadius,
        overflow: "hidden"
    },
    bar: {
        height: "100%",
        borderRadius: Sizes.mediumRadius,
    },
    level: {
        marginTop: Sizes.smallMargin,
        fontSize: Sizes.mediumText,
        fontWeight: '600',
        color: Colors.textSecondary,
    },
});