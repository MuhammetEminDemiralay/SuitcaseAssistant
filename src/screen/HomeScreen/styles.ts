import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3e5c76',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.1,
        alignItems: 'center',
    },

    currentTravelContainer: {
        width: '100%',
        height: height * 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
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
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
    }


}) 