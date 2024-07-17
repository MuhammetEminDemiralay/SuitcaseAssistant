import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        minHeight: height * 1,
        backgroundColor: '#78cdd7',
        paddingVertical: height * 0.1,
        alignItems: 'center',
    },
    genderContainer: {
        width: width * 0.40,
        height: height * 0.1,
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
        width: width * 1,
        height: height * 0.15,
        flexDirection: 'row',
    },
    dateBox: {
        width: width * 0.50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection : 'row',
        rowGap: 5,
        height: height * 0.15,
    },
    dateIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateScreen: {
        backgroundColor: '#fff',
        elevation: 5,
        height: height * 0.075,
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.33
    },
    timeIcon: {
        position: 'absolute',
        top: '18%'
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateText: {
        color: '#343a40',
        fontSize: 16,
        fontWeight: '700'
    },

    travelTypeContainer: {
        width: width * 1,
        height: height * 0.3,
    },
    holidayCategoryImage: {
        width: width * 1,
        height: '100%',
        resizeMode: 'cover'
    },
    confirmBtn: {
        width: '100%',
        height: height * 0.1,
    },



    countryContainer: {
        width: '100%',
        height: height * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    dropdown: {
        width: width * 0.33,
        height: height * 0.05,
        backgroundColor: '#fff',
        paddingLeft: 10,
        fontWeight: '700'
    },
    dropdownContainer: {
        width: width * 0.9,
        height: height * 0.8,
    },
    countryBox: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    flag: {
        width: width * 0.12,
        height: height * 0.05,
    },
    cityBox: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    cityIcon: {
        width: width * 0.12,
        height: height * 0.050,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

})