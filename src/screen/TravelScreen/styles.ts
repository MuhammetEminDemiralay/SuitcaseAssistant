import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 1,
        backgroundColor: '#3e5c76',
        alignItems: 'center'
    },

    emtyTravelBox: {
        width: width * 0.9,
        height: height * 0.875,
        backgroundColor: 'rgba(255,255,255,0.75)',
        left: width * 0.05,
        position: 'absolute',
        marginTop: height * 0.075,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: 10
    },
    emtyTravelText: {
        fontSize: 25,
        fontWeight: '500',
        color: 'gray'
    },

    // 945
    mapContainer: {
        width: width * 1,
        height: height * 0.625,
    },
    mapViewContainer: {
        width: '100%',
        height: '100%',
    },
    mapBorder: {
        width: '100%',
        height: 7,
        position: 'absolute',
        bottom: 0,
    },
    iconImageBox: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff'
    },
    iconImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },

    placeContainer: {
        width: width * 0.95,
        height: height * 0.3,
        marginTop: height * 0.02,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    placeLeftContainer: {
        width: (width * 0.95) - ((height * 0.06) + height * 0.02),
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    placeHeaderContainer: {
        width: '100%',
        height: height * 0.06,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 10,
    },
    placeFlatListContainer: {
    },
    placeHeaderBox: {
        width: (width * 0.75) - ((height * 0.06) + height * 0.02),
        height: height * 0.06,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeHeaderText: {
        fontSize: 18,
        fontWeight: '700'
    },
    headerIconWrapper: {
        width: width * 0.1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIconBox: {
        position: 'absolute',
        top: '25%',
        width: width * 0.075,
        height: width * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.75)',
    },
    headerIconBoxWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 2
    },
    placeContentContainer: {
        width: '100%',
        height: height * 0.24,
        borderRadius: 10,
    },
    emtyContentBox: {
        width: '100%',
        height: height * 0.23,
        backgroundColor: 'rgba(225,225,225,0.75)',
        borderRadius: 10,
        marginTop: height * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emtyContentText: {
        fontSize: 25,
        fontWeight: '500',
        color: 'gray'
    },
    placeContentBox: {
        width: '100%',
        height: height * 0.07,
        marginTop: height * 0.01,
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    placeContentTextBox: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    placeContentText: {
        fontSize: 16,
        fontWeight: '500'
    },
    placeBtnGroupBox: {
        width: '20%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeBtnBox: {

    },
    placeRightContainer: {
        width: height * 0.06,
        height: '100%',
    },
    categoryBox: {
        width: '100%',
        height: height * 0.055,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: height * 0.006
    }










})