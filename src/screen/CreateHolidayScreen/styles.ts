import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        minHeight: height * 1,
        backgroundColor: '#ffba08',
        paddingHorizontal: height * 0.05,
        paddingVertical: height * 0.1,
        alignItems: 'center',
    },
    genderContainer: {
        width: width * 0.40,
        height: height * 0.12,
        alignItems: 'center',
    },
    genderContentList: {
        height: '100%',
    },
    genderBox: {
        width: width * 0.40,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        width: width * 0.60,
        flexDirection: 'column',
        justifyContent: 'space-between',
        rowGap: 5,
        marginTop: height * 0.03
    },
    dateBox: {
        width: width * 0.60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        columnGap: 10
    },
    dateIcon: {
    },
    dateScreen: {
        backgroundColor: '#fff',
        elevation: 5,
        height: height * 0.075,
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeIcon: {
        position: 'absolute',
        top: '35%'
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})