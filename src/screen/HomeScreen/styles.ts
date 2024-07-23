import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3e5c76',
        paddingVertical: height * 0.1,
        alignItems: 'center',
    },
    currentTravelContainer: {
        width: width * 0.9,
        height: height * 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    travelContent: {
        width: (width * 0.9) - (height * 0.1),
        height: height * 0.1,
    },
    travelContenContainer: {
        height: '100%',
        alignItems: 'center'
    },
    travelBox: {
        width: (width * 0.9) - (height * 0.1),
        height: height * 0.1,
    },
    travelContentBox: {
        width: '100%',
        height: height * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentWrapper: {
        width: '90%',
        height: height * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius : 5,
        backgroundColor : '#fff',
        elevation : 5
    },
    flag: {
        width: width * 0.1,
        height: height * 0.035,
        borderRadius: 5,
        marginLeft: 5,
    },
    cityText: {
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 5,
        color: '#343a40',
    },
    date: {
        width: '50%',
        height: height * 0.035,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: 5,
    },
    dateText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#343a40'
    },
    emtyBox: {
        position: 'absolute',
        right: 0,
        width: height * 0.1,
        height: height * 0.1,
        backgroundColor: '#3e5c76',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currentTravelBtn: {
        width: height * 0.09,
        height: height * 0.09,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },


    weatherContainer: {
        width: width * 0.9,
        height: height * 0.1,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },


    // MAP

    mapContainer: {
        width: width * 0.9,
        height: height * 0.3,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }


}) 