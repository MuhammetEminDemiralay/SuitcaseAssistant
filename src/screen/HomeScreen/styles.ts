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
    createTravelBox: {
        width: width * 0.9,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    createTravelText: {
        fontSize: 22,
        fontWeight: '500',
        color: 'gray'
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
        borderRadius: 2,
        marginLeft: 5,
    },
    cityText: {
        fontSize: 20,
        fontWeight: '900',
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
        paddingLeft: 7,
    },
    dateText: {
        fontSize: 15,
        fontWeight: '600',
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
        justifyContent: 'center',
    },


    weatherContainer: {
        width: width * 0.9,
        height: height * 0.22,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weatherEmtyDataBox: {
    },
    weatherEmtyText: {
        fontSize: 22,
        fontWeight: '500',
        color: 'gray'
    },
    weatherTopBox: {
        width: '100%',
        height: height * 0.12,
        borderRadius: 10,
    },
    weatherContentTopBox: {
        height: height * 0.05,
        flexDirection: 'row',
    },
    weatherContentLeftTopBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.6,
        height: '100%',
    },
    weatherInfoBox: {
        width: width * 0.2,
        height: '100%',
        justifyContent: 'center'
    },
    weatherInfoText: {
        fontSize: 9,
        fontWeight: '500',
    },
    weatherBigInfoBox: {
        width: width * 0.2,
        height: '100%',
        justifyContent: 'center',
        paddingRight: 5
    },
    temperatureTextBox: {
        width: width * 0.1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperatureText: {
        fontSize: 20,
        fontWeight: '500'
    },
    weatherContentRightTopBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: width * 0.3,
        height: '100%',
    },
    temperatureBtnBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.08,
        height: width * 0.08,
        borderRadius: 50,
    },
    weatherContentBottomBox: {
        height: height * 0.070,
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
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
    },
    tempValueBox: {
        width: '100%',
        height: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempValueText: {
    },
    tempLineBox: {
        width: '100%',
        height: height * 0.03,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempLine: {
        width: '100%',
        position: 'absolute',
        bottom: 0,

    },
    tempTimeBox: {
        width: '100%',
        height: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempTimeText: {
        color: '#757474',
        fontSize: 9
    },
    weatherBottomBox: {
        width: '100%',
        height: height * 0.1,
    },
    weatherWrapper: {
        width: '100%',
        height: '100%',
    },
    weatherBox: {
        width: width * 0.18,
        height: height * 0.1,
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
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center'
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
        height: height * 0.28,
        marginTop: height * 0.025,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    mapViewContainer: {
        width: '98%',
        height: '97%',
    },
    earthWrapperIconContainer: {
        width: height * 0.1,
        height: height * 0.1,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
    },
    earthWrapperIconBox: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#3e5c76',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    earthIconBox: {
        width: height * 0.09,
        height: height * 0.09,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    earthIcon: {

    },

    noteContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.9,
        height: height * 0.195,
        marginTop: height * 0.025,
    },
    noteAddBox: {
        width: '100%',
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    noteTextInputBox: {
        width: width * 0.78,
        height: '100%',
    },
    noteTextInput: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.75)',
        paddingLeft: 5,
        borderRadius: 5
    },
    notePlusBox: {
        width: (width * 0.12) - height * 0.005,
        height: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noteListContainer: {
        width: '100%',
        height: height * 0.13,
    },
    noteEmtyBox: {
        width: '100%',
        height: height * 0.13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 5,
        position: 'absolute'
    },
    noteListBox: {
        width: '100%',
    },
    noteWrapper: {
        width: '100%',
        height: height * 0.06,
        marginBottom: height * 0.005,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    noteTextBox: {
        width: width * 0.7,
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    noteText: {
        textTransform: 'capitalize',
    },
    noteEditBox: {
        width: width * 0.2,
        height: '100%',
        flexDirection: 'row',
    },
    noteEditBtnBox: {
        width: width * 0.1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }



}) 