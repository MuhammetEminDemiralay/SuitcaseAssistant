import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 1,
        backgroundColor: '#3e5c76',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.1,
    },
    categoryContainer: {
        width: width * 0.9,
        height: height * 0.1,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    categoryBtnBox: {
        width: (width * 0.9) / 7.5,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    contentContainer: {
        height: height * 0.65,
    },
    contentBox: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        minWidth: width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },

})