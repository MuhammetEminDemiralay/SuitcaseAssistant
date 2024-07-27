import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3e5c76',
        paddingTop: height * 0.075,
        alignItems: 'center',
    },

    currentTravelContainer: {
        width: width * 0.9,
        height: height * 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 2
    },
    contentWrapper: {
        width: '90%',
        height: height * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    flag: {
        width: width * 0.09,
        height: height * 0.03,
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
        flexDirection: 'row',
        columnGap: 5,
        paddingLeft: 7
    },
    dateText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#343a40',
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
        paddingTop: 10
    },


    weatherContainer: {
        width: width * 0.9,
        height: height * 0.22,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
    },
    weatherTopBox: {
        width: '100%',
        height: height * 0.12,
        borderRadius: 10,
    },
    weatherContentTopBox: {
        height: height * 0.050,
        borderWidth : 0.5
    },
    weatherContentBottomBox: {
        height: height * 0.070,
    },
    weatherGraficContainer: {
        height: height * 0.05,
    },
    weatherGraficBox: {
        height: height * 0.1,
    },
    tempInfoContainer: {
        height: height * 0.1,
        flexDirection: 'row'
    },
    tempInfoBox: {
        width: (width * 0.9) / 8,
        height: height * 0.1,
        borderWidth: 0.5,
        borderColor : 'gray',
    },
    tempValueBox: {
        width: '100%',
        height: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempValueText: {
        color: '#757474',
        fontSize: 11
    },
    tempLineBox: {
        width: '100%',
        height: height * 0.03,
    },
    tempLine: {
        width: (((width * 0.9) / 8) / 2),
        position: 'absolute',
        bottom: 0,
        left: (((width * 0.9) / 8) / 2) - ((((width * 0.9) / 8) / 2) / 2),
    },
    tempTimeBox: {
        width: '100%',
        height: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempTimeText: {
        color: '#757474',
        fontSize: 11
    },
    weatherBottomBox: {
        width: '100%',
        height: '50%',
    },
    weatherWrapper: {
        width: '100%',
        height: '100%',
        borderTopWidth : 0.5,
    },
    weatherBox: {
        width: width * 0.18,
        height: height * 0.1,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    },
    dayBox: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dayText: {
        fontSize: 11,
        fontWeight: '500'
    },
    weatherIconBox: {
        width: '100%',
        height: '50%',
    },
    weatherIcon: {
        width: width * 0.18,
        height: height * 0.05,
    },
    tempBox: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 4
    },
    maxTemp: {
        color: '#000814',
        fontSize: 12,
        fontWeight: '500'
    },
    minTemp: {
        fontSize: 11
    },


    // MAP
    mapContainer: {
        width: width * 0.9,
        height: height * 0.3,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },


    suitcase: {

    },
    earth: {

    },


    noteContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.9,
        height: height * 0.175,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 10
    },
    mapViewContainer: {
        width: '95%',
        height: '95%',
    }


}) 