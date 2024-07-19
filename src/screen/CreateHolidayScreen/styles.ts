import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        minHeight: height * 1,
        backgroundColor: '#3e5c76',
        paddingVertical: height * 0.1,
        alignItems: 'center',
    },

    //Gender

    genderContainer: {
        width: width * 0.40,
        height: height * 0.125,
        alignItems: 'center',
        marginBottom: height * 0.025,
    },
    genderContentList: {
        height: height * 0.09,
    },
    genderBox: {
        width: width * 0.40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        width: width * 0.9,
        height: height * 0.125,
        flexDirection: 'row',
    },
    genderText: {
        width: '100%',
        height: height * 0.04,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        opacity: 0.75,
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 10,
        elevation : 10
    },
    genderIcon: {
        position: 'absolute',
        top: '25%',
        zIndex: 2,
        width: width * 0.075,
        height: width * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        opacity: 0.75
    },


    // Date

    dateBox: {
        width: width * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.125,
        rowGap: 8
    },
    dateIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateScreen: {
        backgroundColor: '#fff',
        elevation: 5,
        height: height * 0.06,
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.4,
        borderRadius: 10
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateText: {
        fontSize: 16,
        fontWeight: '500'
    },


    // Country

    countryContainer: {
        width: width * 0.9,
        height: height * 0.125,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    dropdown: {
        width: width * 0.30,
        height: height * 0.05,
        backgroundColor: '#fff',
        paddingLeft: 10,
        fontWeight: '700',
        fontSize: 10,
        opacity: 0.75,
        elevation: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    dropdownContainer: {
        width: width * 0.9,
        height: height * 0.82,
        position: 'absolute',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#3e5c76',
        borderWidth: 2,
        borderColor: '#fff'
    },
    countryBox: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    flag: {
        width: width * 0.12,
        height: height * 0.05,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    placeHolderStyle: {
        fontSize: 16,
        fontWeight: '500',
    },
    selectedTextStyle: {
        fontSize: 14,
        fontWeight: '500'
    },
    itemContainerStyle: {
        borderWidth: 0.25,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: '#fff'
    },
    inputSearchStyle: {
        width: '100%',
        height: height * 0.06,
        backgroundColor: '#fff',
        margin: 0,
        borderRadius : 10
    },
    cityBox: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    cityIcon: {
        width: width * 0.12,
        height: height * 0.050,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },


    // Travel

    travelTypeContainer: {
        width: width * 0.9,
        height: height * 0.3,
        borderWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    holidayCategoryImage: {
        width: width * 0.9,
        height: '100%',
        resizeMode: 'cover',
    },
    carouselBtn: {
        position: 'absolute',
        zIndex: 1,
        width: width * 0.09,
        height: width * 0.09,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        opacity: 0.75,
        elevation: 5,
    },
    carouselIcon: {

    },
    travelTextBox: {
        position: 'absolute',
        zIndex: 2,
        right: 10,
        top: 10,
        minWidth: width * 0.35,
        height: width * 0.08,
        backgroundColor: '#fff',
        borderRadius: 6,
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    travelText: {
        fontSize: 16,
        fontWeight: '500'
    },



    // Confirm

    confirmBox: {
        width: width * 0.9,
        height: height * 0.1,
        justifyContent: 'flex-end'
    },
    confirmBtn: {
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        opacity: 0.75,
        elevation: 5
    },
    confirmText: {
        fontSize: 20,
        fontWeight: '500',
    }

})